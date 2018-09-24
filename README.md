# react-native-speech-bubble [![CircleCI](https://circleci.com/gh/charpeni/react-native-speech-bubble.svg?style=shield)](https://circleci.com/gh/charpeni/react-native-speech-bubble) [![npm version](https://badge.fury.io/js/react-native-speech-bubble.svg)](https://badge.fury.io/js/react-native-speech-bubble)

A speech bubble dialog component for React Native.

<img src="https://cloud.githubusercontent.com/assets/7189823/16232855/199dc1dc-379a-11e6-97be-612b0dbc5495.gif" height="500" />

## Install

```
npm install --save react-native-speech-bubble
```

## Usage

```javascript
import SpeechBubble from 'react-native-speech-bubble';
```

```jsx
<SpeechBubble
  speeches={[ 'String 1', 'String 2', 'String 3' ]}
/>
```

## API

| Prop | Type | Description |
|------|------|-------------|
| `allowSkip`| `bool` | Speech bubble will be clickable before the end of the animation (Default is `false`) |
| `allowSpeechReplay`| `bool` | Add a replay action at the end of the speeches (Default is `false`)|
| `hideIcons`| `bool` | Speech bubble will hide icons (Default is `false`)|
| `nextStyle`| `Text.propTypes.style` | Style of the "Next" icon |
| `onSpeechEnd`| `func` | Callback that will be called at the end of the animation of the current speech |
| `onSpeechNext`| `func` | Callback that will be called when you triggered the next speech |
| `onSpeechReplay`| `func` | Callback that will be called when you triggered the replay action |
| `speaker`| `string` | Title of the speech bubble (Speaker or interlocutor) |
| `speakerStyle`| `ViewPropTypes.style,` | Style that will be applied to the speaker view |
| `speakerTextStyle`| `Text.propTypes.style` | Style that will be applied to the speaker text style |
| `speechBubbleActiveOpacity`| `number` | Opacity of the clickable bubble as a `TouchableOpacity` |
| `speechBubbleStyle`| `ViewPropTypes.style,` | Style that will be applied to the speech bubble |
| `speechBubbleTextStyle`| `Text.propTypes.style` | Style that will be applied to the text of the speech bubble. This is actually applied to a `View` element. If you want to influence the `Text` Component, please use `typeWriterStyle` instead |
| `speeches`| `array of string` | **(Required)** Speeches that will be displayed into the speech bubble, one item = one bubble. |
| `style`| `ViewPropTypes.style,` | Style of the `<SpeechBubble>` component (container) |
| `typeWriterStyle`| `Text.propTypes.style` | Style of the TypeWriter `Text` Component |
| `onFinalEnd`| `func` | Callback that will be called at the end of the animation of the last speech |
| `activateAutoMode`| `bool` | The next speech will automatically be displayed. (Default is `false`) |
| `timeAfterASpeech`| `number` | Time in milliseconds before starting the next speech if `activateAutoMode` is `true` (Default is `5000`) |

## License
MIT.
