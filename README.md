# Install

```
mnpm install @scfe/react-native-button  --save
```
仓库地址： ssh://git@git.sankuai.com/scfe/react-native-button.git

# API

Props |Type| Description
---|---|---
text | PropTypes.string | 按钮显示的文本，当按钮有子元素时，将覆盖text
onPress | PropTypes.func |  传递点击事件
size | PropTypes.string | 控制按钮的大小，可取的值为：xs、sm、default、lg，默认default
type | PropTypes.string |  控制按钮的颜色，可取的值为：default、primary、success、info 、warning、danger、link、main，默认default
activityIndicatorColor | PropTypes.string | 控制loading的颜色，默认white
containerStyle | View.propTypes.style |  自定义按钮外层的样式
textStyle | Text.propTypes.style | 自定义按钮文本的样式
isLoading | PropTypes.bool |  是否在加载中的属性
disabled | PropTypes.bool |  是否在disabled状态
disabledContainerStyle | View.propTypes.style |  自定义disabled状态按钮外层的样式
disabledTextStyle | Text.propTypes.style | 自定义disabled状态按钮文本的样式
props |  | 可以指定任意TouchableOpacity的属性，都会透传过去，例如常用的onPressIn、onPressOut、onLongPress等等。
children | string, number, React.Element,or array |  children指代button里的子节点，如果子节点是string或者number类型，则渲染在Text元素内，如果是array或者React.Element类型则直接渲染。

# example
```

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from '@scfe/react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
class TestButton extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.row}>
			<Button size='lg' text="（大按钮）size='lg'" />
      	</View>
      	<View style={styles.row}>
			<Button  text="（默认尺寸）" />
      	</View>
      	<View style={styles.row}>
			<Button size='sm'   text="（小按钮) size='sm'" />
      	</View>
      	<View style={styles.row}>
			<Button size='xs'   text="（超小尺寸) size='xs'" />
      	</View>
      	<View style={styles.row}>
			<Button type="default"  text="（默认样式）type=default" />
      	</View>
      	<View style={styles.row}>
			<Button type="primary"  text="（首选项）type=type=primary" />
      	</View>
      	<View style={styles.row}>
			<Button type="success"  text="（成功）type=success" />
      	</View>
      	<View style={styles.row}>
			<Button type="info"  text="（一般信息）type=info" />
      	</View>
      	<View style={styles.row}>
			<Button type="warning"  text="（警告）type=warning" />
      	</View>
      	<View style={styles.row}>
			<Button type="danger"  text="（危险）type=danger" />
      	</View>
      	<View style={styles.row}>
			<Button type="main"  text="（美团色）type=main" />
      	</View>
      	<View style={styles.row}>
			<Button  type="link" text="（链接）Link" />
      	</View>
      	<View style={styles.row}>
			<Button  disabled={true} text="disabled" />
      	</View>
      	<View style={styles.row}>
			<Button  isLoading={true} activityIndicatorColor="black" text="loading" />
      	</View>
      	<View style={styles.row}>
			<Button type="danger" isLoading={true}  text="loading" />
      	</View>


      	<View style={styles.row}>
      		<Button>
      			<View style={{flexDirection: 'row'}}>
      				<Icon name={"desktop"} size={18} color='#000'/>
      				<Text style={{marginLeft: 5}}>自定义内容</Text>
      			</View>
      		</Button>
      	</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10
	},
	row: {
		marginTop: 5
	}
});

export default TestButton;
```

# Screenshots
![image description](https://dn-cnode.qbox.me/FiFVHd2_hOui1yCvp7FExm4Avj_l)