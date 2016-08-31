'use strict';

import React, { Component,PropTypes } from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	ActivityIndicator
} 	from 'react-native';

export default class MtButton extends Component {
	static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func,
        containerStyle: View.propTypes.style,
        textStyle: Text.propTypes.style,
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        disabledContainerStyle: View.propTypes.style,
        disabledTextStyle: Text.propTypes.style,
        activityIndicatorColor: PropTypes.string,
        size: PropTypes.string, //xs、sm、lg 、default
        type: PropTypes.string  //default、primary、success、info 、warning、danger、link、main
    };


    _onPress () {
		let {
  			onPress,
  			disabled,
  			isLoading
  		} = this.props;
  		if(disabled || isLoading) {
  			return;
  		}
  		if(typeof onPress === 'function') {
  			onPress();
  		}
    }


  	render() {
  		let {
  			text,
  			onPress,
  			containerStyle,
  			textStyle,
  			disabled,
  			isLoading,
        disabledContainerStyle,
        disabledTextStyle,
        size,
        type
  		} = this.props;
      size = size ? size: 'default';
      let customSize = SizeMap[size];
      customSize = customSize ? customSize: SizeMap['default'];

      type = type ? type: 'default';
      let customType = TypeMap[type];
      customType = customType ? customType: TypeMap['default'];

  		let finalContainerStyle = [];
      let finalTextStyle = [];
      let activeOpacity = 0.2;

      //默认样式
      finalContainerStyle.push(styles.containerStyle);
      finalTextStyle.push(styles.textStyle);

      //size
      if(customSize) {
        finalContainerStyle.push(customSize.containerStyle);
        finalTextStyle.push(customSize.textStyle);
      }

      //type
      if(customType) {
        finalContainerStyle.push(customType.containerStyle);
        finalTextStyle.push(customType.textStyle);
      }

      //用户自定义样式
  		finalContainerStyle.push(containerStyle);
      finalTextStyle.push(textStyle);

      //disabled 样式
      if(disabled) {
        activeOpacity = 1;
        finalContainerStyle.push(styles.disabledContainerStyle);
        finalTextStyle.push(styles.disabledTextStyle);
      }

  		let content = null;
  		if(isLoading) {
        text = '';
        activeOpacity = 1;
  			content = (
  				<ActivityIndicator
          animating={true}
          size='small'
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'white'}
          />);
  		}

      if(text) {
        content = (
            <Text style={finalTextStyle}>
              {text}
            </Text>);
      }
      if(this.props.children) {
        let childElements = [];
        React.Children.forEach(this.props.children, (item) => {
          if (typeof item === 'string' || typeof item === 'number') {
            const element = (
              <Text
                style={finalTextStyle}
                key={item}>
                {item}
              </Text>
            );
            childElements.push(element);
          } else if (React.isValidElement(item)) {
            childElements.push(item);
          }
        });
        content = (childElements);
      }
     
	    return (
	    	<TouchableOpacity {...this.props}  activeOpacity={activeOpacity}  style={finalContainerStyle}  onPress={this._onPress.bind(this)}>
  				{content}	    
	    	</TouchableOpacity>
	    );
  	}
}

const SizeMap = {
  'default': {
    containerStyle: {
      height: 36
    },
    textStyle: {
      fontSize: 14
    }
  },
  'sm': {
    containerStyle: {
      height: 28
    },
    textStyle: {
      fontSize: 12
    }
  },
  'xs': {
    containerStyle: {
      height: 20
    },
    textStyle: {
      fontSize: 12
    }
  },
  'lg': {
    containerStyle: {
      height: 44
    },
    textStyle: {
      fontSize: 18
    }
  }
}

const TypeMap = {
  'default': {
    containerStyle: {
      backgroundColor: '#fff',
      borderColor: 'rgba(204, 204, 204, 1)'
    },
    textStyle: {
      color: '#000'
    }
  },
  'primary': {
    containerStyle: {
      backgroundColor: '#337ab7',
      borderColor: '#2e6da4'
    },
    textStyle: {
      color: '#fff'
    }
  },
  'success': {
    containerStyle: {
      backgroundColor: '#5cb85c',
      borderColor: '#4cae4c'
    },
    textStyle: {
      color: '#fff'
    }
  },
  'info': {
    containerStyle: {
      backgroundColor: '#5bc0de',
      borderColor: '#46b8da'
    },
    textStyle: {
      color: '#fff'
    }
  },
  'warning': {
    containerStyle: {
      backgroundColor: '#f0ad4e',
      borderColor: '#eea236'
    },
    textStyle: {
      color: '#fff'
    }
  },
  'danger': {
    containerStyle: {
      backgroundColor: '#d9534f',
      borderColor: '#d43f3a'
    },
    textStyle: {
      color: '#fff'
    }
  },
  'link': {
    containerStyle: {
      backgroundColor: '#fff',
      borderColor: '#fff'
    },
    textStyle: {
      color: '#337ab7'
    }
  },
  'main': {
    containerStyle: {
      backgroundColor: '#06c1ae',
      borderColor: '#06c1ae'
    },
    textStyle: {
      color: '#fff'
    }
  }
}

const btnHeight = 30;
const styles = StyleSheet.create({
	containerStyle: {
		height: btnHeight,
		backgroundColor: '#06c1ae',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
    borderWidth: 1
	},
	textStyle: {
		color: '#fff',
		fontSize: 14
	},
	disabledTextStyle: {
		color: 'rgba(187, 187, 187, 1)'
	},
	disabledContainerStyle: {
		backgroundColor: 'rgba(211, 211, 211, 1)',
    borderColor: 'rgba(211, 211, 211, 1)'
	},
  spinner: {
    alignSelf: 'center',
  }
});

