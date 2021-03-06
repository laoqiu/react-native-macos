/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('React');
var ReactNative = require('react-native-macos');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
} = ReactNative;

exports.framework = 'React';
exports.title = 'Vibration';
exports.description = 'Vibration API';
exports.examples = [
  {
    title: 'Vibration.vibrate()',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate()}>
          <View style={styles.button}>
            <Text>Vibrate</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: 'Vibration.vibrate([0, 500, 200, 500])',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate([0, 500, 200, 500])}>
          <View style={styles.button}>
            <Text>Vibrate once</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: 'Vibration.vibrate([0, 500, 200, 500], true)',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate([0, 500, 200, 500], true)}>
          <View style={styles.button}>
            <Text>Vibrate until cancel</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
  {
    title: 'Vibration.cancel()',
    render() {
      return (
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.cancel()}>
          <View style={styles.button}>
            <Text>Cancel</Text>
          </View>
        </TouchableHighlight>
      );
    },
  },
];

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});
