## What I learned

- React Native에서 제공되는 Button 컴포넌트는 기본적으로 Touchable, View, Text 컴포넌트들의 조합으로 이루어져있다. (https://github.com/facebook/react-native/blob/main/Libraries/Components/Button.js)

- React Native에는 웹브라우저에서 사용되는 boxShadow기능이 없으며, 안드로이드는 elevation을 사용하며, IOS는 shadowColor, shadowOffset : {width, height},shadowRadius, shadowOpacity를 사용한다.

- TextInput API에서 keyboardType 으로 숫자만 입력 가능하게 할것인지 등 설정 할 수 있다. (number-pad 이면 숫자만, 그 외 여러가지 속성값들이 있다), 추가적으로 autoCorrect 및 autoCapitalize 등 자동으로 무언가 변할때 사용되는 속성을 컨트롤 하여서 사용자 경험을 저해시키는 요소들을 제거 할 수도 있다.

- 클릭이 가능한 컨테이너를 만들때 Pressable API를 이용할 수 있다.
  - TouchableOpactiy라는 것도 있지만, Pressable은 onPressIn, Out, LongPress등 다양한 상황에 대해 이벤트를 줄 수 있따.
  - android-ripple 속성으로 클릭했을때 효과도 줄 수 있다 (하지만 이것은 안드로이드만 가능)
  - android-ripple에서 의도한대로 파급효과를 주기 위해선 View 컴포넌트 안에 Pressable을 넣고 그 안에 속성값을 줘야한다. 즉 View -> Pressable -> Text
  - style 속성안에 pressed 프로퍼티가 내부적으로 들어오는데 이 boolean값으로 눌렀을때의 스타일링을 할 수 있다.
    - [styles.buttonInnerContainer,styles.pressed]과 같은 형태로 배열을 사용하여 여러 스타일 프로퍼티 값들을 넣어 스타일링이 가능하다.
