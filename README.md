## What I learned

- React Native에서 제공되는 Button 컴포넌트는 기본적으로 Touchable, View, Text 컴포넌트들의 조합으로 이루어져있다. (https://github.com/facebook/react-native/blob/main/Libraries/Components/Button.js)

- React Native에는 웹브라우저에서 사용되는 boxShadow기능이 없으며, 안드로이드는 elevation을 사용하며, IOS는 shadowColor, shadowOffset : {width, height},shadowRadius, shadowOpacity를 사용한다.

- TextInput API에서 keyboardType 으로 숫자만 입력 가능하게 할것인지 등 설정 할 수 있다. (number-pad 이면 숫자만, 그 외 여러가지 속성값들이 있다), 추가적으로 autoCorrect 및 autoCapitalize 등 자동으로 무언가 변할때 사용되는 속성을 컨트롤 하여서 사용자 경험을 저해시키는 요소들을 제거 할 수도 있다.
