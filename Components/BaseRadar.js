import React from 'react'
import {StyleSheet,View} from 'react-native'
import ControleRadar from "./ControleRadar.js"
import Radar from "./Radar.js"
import requester from '../API/requester'

class BaseRadar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        tableauRadar : [],
        coo: {x: 0, y: 0, d: 4}
    }
    this._creationRadar = this._creationRadar.bind(this)
    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
    this.up = this.up.bind(this)
    this.down = this.down.bind(this)
    this.focusHome = this.focusHome.bind(this)
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  async _creationRadar(){
    let tableauRadar = await requester.getGrille(this.state.coo);
    this.setState( {
      tableauRadar
    })
  }

  async left() {
    this.state.coo.x--;
    this._creationRadar();
  }

  async right() {
    this.state.coo.x++;
    this._creationRadar();
  }

  async up() {
    this.state.coo.y--
    this._creationRadar();
  }

  async down() {
    this.state.coo.y++;
    this._creationRadar();
  }

  async focusHome() {
    this.state.coo.x = 0;
    this.state.coo.y = 0;
    this._creationRadar();
  }

  async zoomOut() {
    this.state.coo.d++;
    this._creationRadar();
  }

  async zoomIn() {
    this.state.coo.d--;
    this._creationRadar();
  }

  render(){
    return(
    <View style={styles.main_container}>
      <View style={styles.container_radar}>
        <Radar tableau = {this.state.tableauRadar}/>
      </View>
      <View style={styles.container_arrow}>
        <ControleRadar update={this._creationRadar}
        focusHome={this.focusHome}
        left={this.left}
        right={this.right}
        up={this.up}
        down={this.down}
        zoomIn={this.zoomIn}
        zoomOut={this.zoomOut}
      />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flex : 1
  },
  container_radar :{
    flex : 2,
    backgroundColor : "grey"
  },
  container_arrow :{
    flex : 1
  }
})
export default BaseRadar
