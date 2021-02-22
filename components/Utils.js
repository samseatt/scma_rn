import React from 'react';
import { StyleSheet, Text } from 'react-native';


const NO_WIDTH_SPACE = '​';

export const tagBlue = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.taggedBlue}>{word} </Text>
                {NO_WIDTH_SPACE}
            </Text>
        )))};

export const tagGreen = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.taggedGreen}>{word} </Text>
                {NO_WIDTH_SPACE}
            </Text>
        )))};

export const tagOrange = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.taggedOrange}>{word} </Text>
                {NO_WIDTH_SPACE}
            </Text>
        )))};
        
        
export const tagRed = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.taggedRed}>{word} </Text>
                {NO_WIDTH_SPACE}
            </Text>
        )))};

export const tagBlack = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.taggedBlack}>{word} </Text>
                {NO_WIDTH_SPACE}
            </Text>
        )))};

export const highlight = string => {
    if (!string) string = ' ';
    return (
        string.split(' ').map((word, i) => (
            <Text key={i}>
            <Text style={utilStyles.highlighted}>{word} </Text>
            {NO_WIDTH_SPACE}
            </Text>
        )))};

const utilStyles = StyleSheet.create({
    taggedBlue: {
        backgroundColor: '#336699',
        color: 'white',
    },
    taggedBlack: {
        backgroundColor: '#111111',
        color: 'white',
    },
    taggedRed: {
        backgroundColor: '#d14020',
        color: 'white',
    },
    taggedOrange: {
        backgroundColor: '#ff6600',
        color: 'white',
    },
    taggedGreen: {
        backgroundColor: '#339966',
        color: 'white',
    },
    highlighted: {
        backgroundColor: '#ccffcc',
    },
});