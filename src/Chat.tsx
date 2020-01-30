import React, {useState, useEffect} from "react";
import {ChatEntry} from "@conversationalcomponents/chat-window/types";
import {ChatWindow, useUserTyping, useBotTyping} from "@conversationalcomponents/chat-window";
import {avatars} from "./avatars";
import {getBotReply} from "./getBotReply";
import {AnswerProvider} from "./AnswerProvider";

export const Chat = () => {
    const [content, setContent] = useState<ChatEntry[]>([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");
    const [lastBotReply, setLastBotReply] = useState<string | undefined>(undefined);

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
        //intercept last bot message, to build suggestions list
        setLastBotReply(lastEntry.message);
        setLastUnsubmittedInput('');
    }, [content, isBotDoneTyping]);

    //hack which uggly and based on internal ChatWindow internal implementation,  needed to prevent owerriding user message
    // by bot message when sent using  setLastInputValue(text); in other case bot owerride this message
    const makeMessage = (isUser: boolean, text: string, id: number) => ({
        isUser,
        message: text,
        avatar: avatars.user,
        id: `message_${id}`,
        isLoading: false
    });

    function getFooter() {
        if (content.length > 0 && !content[0].isLoading) {
            return <AnswerProvider message={lastBotReply}
                                   onAnswerPicked={(text: string) => {
                                       // manual insert data to content - hack better to investigate public API of Chat Window
                                       content.push(makeMessage(true, text, content.length))
                                       setLastInputValue(text);
                                   }
                                   }
            />
        } else {
            return undefined;
        }
    }

    return (<ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>HEADER</div>}
            content={content}
            onChange={(text: string) => setLastUnsubmittedInput(text)}
            onSubmit={(text: string) => setLastInputValue(text)}
            footer={getFooter()}
        />
    );
};
