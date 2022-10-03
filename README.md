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

- align-items의 기본값은 stretch이기때문에 기본적으로 쭉 늘어난다.

  - 내부 플렉스 아이템들이 원하는 크기대로 움직이려면 <View/> 로 감싸서 캡슐화를 해주고 해주면 컨트롤이 편리하다.
  - flex 속성을 이용해서 원하는 사이즈가 나올 수 있도록 상황에 맞게 스타일링한다.

- ImageBackground API를 사용하여 web에서의 background-image와 같은 UI를 만들 수 있다.

  - source 속성안에 uri 프로퍼티를 넣어 cdn을 넣을 수 도있고, require를 사용하여 import한것을 넣을 수도 있다.
  - imageStyle 프로퍼티에서 따로 스타일링을하여 image만 스타일링을 줄 수 가 있다.
  - 예를들어 opacity 0.75를 만든 객체를 imageStyle 에 넣어주면 rgba(?,?,?,0.75)와 같은 효과를 낸다.

- Alert Api를 통하여 어플리케이션 내 alert를 표현할 수 있는데, title, message를 설정 할 수 있으며, 옵션으로 [
  { text: "확인", style: "destructive", onPress: handleResetInput },
  ] 와 같은 형태로 버튼 텍스트, 스타일, 눌렀을때 이벤트를 설정 할 수 있다.

- SafeAreaView API로 아이폰에서 상단 노치바 만큼 공간을 준 컨테이너를 적용시킬 수 있다. (아직은 IOS만 된다. )

- Math.floor(Math.random() \* (max - min)) + min 와 같이 min max 의 random값을 뽑아낼 수 있다.

- `<FlatList data={guessRounds} renderItem={(itemData)=><Text>{itemData.item}</Text>} keyExtractor={(item)=>item}/> ` 이런식으로 FlatList를 사용하여 lazy loading이 적용된 리스트 렌더링을 할 수 있따

- `maxWidth:'80%'; width:300` 과 같이 스타일링을 하면 동적으로 width을 줄 수 있다.

- Dimensions API를 사용하여 화면에 대한 크기를 구할 수 있다

  - `const windowWidth = Dimensions.get('window').width; const windowHeight = Dimensions.get('window').height;`
  - 폴더블 폰같이 지속적으로 스크린이 변화할때 동적으로 업데이트를 시킬 수 있다.
  - `Dimensions.addEventListener("change",callback)`을 사용하여 화면 change시 window와 screen 프로퍼티 값을 받아 올 수 있다.
  - screen은 사용가능한 전체 스크린이고(status bar 포함), window는 status bar가 제외한것이다.
  - `padding: windowWidth < 380 ? 12 : 24`;
  - 혹은 useWindowDimensions 훅으로 change이벤트를 내부적으로 실행시켜 width height를 계속 업데이트 할 수도있다.

- app.json 내 orientation 프로퍼티가 있는데 기본값은 portrait이며, 화면이 로테이트 될때 lock이 걸려서 움직이질 않는다. 움직이길 원하면 default로 value를 변경한다.

- KeyboardAvoidingView API를 사용하여 키보드 키패드가 나타났을때 키보드가 UI를 덮는것을 방지할수 있다.

  - behavior='position'같은 속성값을 준다.
  - ScrollView를 사용하여 KeyboardAvoidingView를 감싸서 키보드가 올라가면서 컴포넌트가 올라갔을때 스크롤을 이용하여 전체적으로 볼 수 있다.

- Platform API를 사용하여 사용자 os에 따른 기능을 줄 수 있다.
  - `borderWidth : Platform.OS === 'android' ? 2 : 0`
  - `borderWidth : Platform.select({android:2 , ios:0})`
  - Title.android.js or Title.ios.js 이런식으로ㅓ 파일명을 지정하면, 내부적으로 컴파일될때 알아서 그 플랫폼에 맞는 컴포넌트를 렌더링시켜준다. 때문에 import 경로는 /Title 이렇게만 import를 한다. (일반 js 파일도 다 가능하다. )
