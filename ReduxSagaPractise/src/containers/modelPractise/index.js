import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import Modal from 'react-native-modal';
import modelStyle from './style'


export default class ModelExample extends Component {
    state = {
      visibleModalId: null,
    };
  
    renderModalContent = () => (
      <View style={modelStyle.content}>
        <Text style={modelStyle.contentTitle}>Hi 👋!</Text>
        <Button
          onPress={() => this.setState({ visibleModal: null })}
          title="Close"
        />
      </View>
    );
  
    handleOnScroll = event => {
      this.setState({
        scrollOffset: event.nativeEvent.contentOffset.y,
      });
    };
  
    handleScrollTo = p => {
      if (this.scrollViewRef) {
        this.scrollViewRef.scrollTo(p);
      }
    };
  
    render() {
      return (
        <View style={modelStyle.container}>
          <Button
            onPress={() => this.setState({ visibleModal: 'default' })}
            title="Default"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'sliding' })}
            title="Sliding from the sides"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'slow' })}
            title="Sloooow"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'fancy' })}
            title="Fancy!"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'bottom' })}
            title="Bottom half"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'backdropPress' })}
            title="Close on backdrop press"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'swipeable' })}
            title="Swipeable"
          />
          <Button
            onPress={() => this.setState({ visibleModal: 'scrollable' })}
            title="Scrollable"
          />
          <Modal isVisible={this.state.visibleModal === 'default'}>
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'sliding'}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'slow'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'fancy'}
            backdropColor="#B4B3DB"
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'bottom'}
            onSwipeComplete={() => this.setState({ visibleModal: null })}
            swipeDirection={['up', 'left', 'right', 'down']}
            style={modelStyle.bottomModal}
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'backdropPress'}
            onBackdropPress={() => this.setState({ visibleModal: null })}
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'swipeable'}
            onSwipeComplete={() => this.setState({ visibleModal: null })}
            swipeDirection={['down']}
          >
            {this.renderModalContent()}
          </Modal>
          <Modal
            isVisible={this.state.visibleModal === 'scrollable'}
            onSwipeComplete={() => this.setState({ visibleModal: null })}
            swipeDirection="down"
            scrollTo={this.handleScrollTo}
            scrollOffset={this.state.scrollOffset}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            style={modelStyle.bottomModal}
          >
            <View style={modelStyle.scrollableModal}>
              <ScrollView
                ref={ref => (this.scrollViewRef = ref)}
                onScroll={this.handleOnScroll}
                scrollEventThrottle={16}
              >
                <View style={modelStyle.scrollableModalContent1}>
                  <Text style={modelStyle.scrollableModalText1}>You can scroll me up! 👆</Text>
                </View>
                <View style={modelStyle.scrollableModalContent2}>
                  <Text style={modelStyle.scrollableModalText2}>Same here as well! ☝</Text>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
      );
    }
  }
  