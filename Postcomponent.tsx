import React from "react";
import { Text, View } from "react-native";
import Post from "./Post";

export default function PostComponent(props: { post: Post }) {
    return (
        <View>
            <Text style={{ fontWeight: "bold" }}>Título:</Text>
            <Text>{props.post.title}</Text>
        </View>
    );
}