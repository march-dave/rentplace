/* application/components/Landing.js */
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import Colors from '../styles/colors';
import { landingStyles, globals } from '../styles';

const BackgroundImage = 'https://res.cloudinary.com/drrwovgv6/image/upload/c_scale,w_367/v1496540595/bergdorf-113508_1920_msim9b.jpg';
// const Logo = 'https://res.cloudinary.com/drrwovgv6/image/upload/v1483895904/icon_r5rwee.png';
const styles = landingStyles;

class Landing extends Component{
  constructor(){
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
  }
  visitDashboard(){
    this.props.navigator.push({ name: 'Dashboard' })
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: BackgroundImage }}
          />
        </View>
        <View style={globals.flexCenter}>
          {/*<Image
            style={styles.logo}
            source={{ uri: Logo }}
          />*/}
          {/*<Text style={[globals.landText, globals.h2, globals.mb2]}>
            Rent Place
          </Text>*/}
          {/*<Text style={[globals.lightText, globals.h4]}>
            Where Public List
          </Text>*/}
        </View>
        <TouchableOpacity
          style={globals.button}
          onPress={this.visitDashboard}
        >
          {/*<Icon name='ios-person' size={36} color='white' />*/}
          <Text style={globals.buttonText}>
            {" "} Go to Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Landing;
