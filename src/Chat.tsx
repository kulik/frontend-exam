import React, {useState, useEffect} from "react";
import {ChatEntry} from "@conversationalcomponents/chat-window/types";
import {ChatWindow, useUserTyping, useBotTyping} from "@conversationalcomponents/chat-window";
import {avatars} from "./avatars";
import {getBotReply} from "./getBotReply";

export const Chat = () => {
    const [content, setContent] = useState<ChatEntry[]>([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");

    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        setLastInputValue("");
    }, [content]);

    useEffect(() => {
        lastInputValue && setLastUnsubmittedInput("");
    }, [lastInputValue]);

    // this pushes an entry to content with {isUser:true, isLoading:true}, and either removes it when user cancels typing or changes it to {message:lastInputValue, isLoading:false} when user submits
    useUserTyping(content, setContent, lastUnsubmittedInput, lastInputValue, avatars.user);
    // this pushes an entry to content with {isUser:false, isLoading:true} and returns false, then waits for a short random period, and returns true
    const isBotDoneTyping = useBotTyping(content, setContent, lastInputValue, avatars.bot);

    useEffect(() => {
        if (!isBotDoneTyping) return;
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        lastEntry.message = getBotReply();
        lastEntry.isLoading = false;
    }, [content, isBotDoneTyping]);

    return (
        <ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>HEADER</div>}
            content={content}
            onChange={(text: string) => setLastUnsubmittedInput(text)}
            onSubmit={(text: string) => setLastInputValue(text)}
        />
    );
};
