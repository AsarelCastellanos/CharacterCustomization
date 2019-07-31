import { Component, OnInit } from '@angular/core';

let customButton: string[];
customButton = ['skinToneButton', 'hairButton', 'eyeButton', 'faceButton'];
let faceButtons: string[];
faceButtons = ['faceButton1', 'faceButton2', 'faceButton3', 'faceButton4', 'faceButton5'];
let hairButtons: string[];
hairButtons = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5', 'hair6', 'hair7', 'hair8'];
let eyeButtons: string[];
eyeButtons = ['eyes1', 'eyes2', 'eyes3', 'eyes4', 'eyes5', 'eyes6', 'eyes7', 'eyes8'];
let skinTone1Face: string[];
skinTone1Face = ['face11', 'face12', 'face13', 'face14', 'face15', 'face16', 'face17', 'face18'];
let skinTone2Face: string[];
skinTone2Face = ['face21', 'face22', 'face23', 'face24', 'face25', 'face26', 'face27', 'face28'];
let skinTone3Face: string[];
skinTone3Face = ['face31', 'face32', 'face33', 'face34', 'face35', 'face36', 'face37', 'face38'];
let skinTone4Face: string[];
skinTone4Face = ['face41', 'face42', 'face43', 'face44', 'face45', 'face46', 'face47', 'face48'];
let skinTone5Face: string[];
skinTone5Face = ['face51', 'face52', 'face53', 'face54', 'face55', 'face56', 'face57', 'face58'];
let holder: string;
holder = ' ';
let holderArr: string[];

@Component({
  selector: 'app-build',
  templateUrl: './build.page.html',
  styleUrls: ['./build.page.scss'],
})
export class BuildPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  skinTone(data) {
    if (data == 'faceButton1') {
      holder = 'faceButton1';
      holderArr = skinTone1Face;
    } else if (data == 'faceButton2') {
      holder = 'faceButton2';
      holderArr = skinTone3Face;
    } else if (data == 'faceButton3') {
      holder = 'faceButton3';
      holderArr = skinTone3Face;
    } else if (data == 'faceButton4') {
      holder = 'faceButton4';
      holderArr = skinTone4Face;
    } else {
      holder = 'faceButton5';
      holderArr = skinTone5Face;
    }
    console.log(holder);
    console.log(holderArr);
  }

  hideFaceButtons(data) {
    let y;
    for (y = 0; y < faceButtons.length; y++) {
      if(data != faceButtons[y]) {
        console.log("hide " + faceButtons[y]);
        document.getElementById(faceButtons[y]).style.display = 'none';
      }
    }
    console.log("display " + data);
    document.getElementById(data).style.display = 'block';
  }

  showType(data) {
    let x;
    for (x = 0; x < customButton.length; x++) {
      if (data != customButton[x]) {
        console.log("hide " + customButton[x]);
        document.getElementById(customButton[x]).style.display = 'none';
      }
    }
    console.log("show " + data);
    document.getElementById(data).style.display = 'block';
  }

  showFace(data) {
    let b;
    for (b = 0; b < holderArr.length; b++) {
      if (data != holderArr[b]) {
        console.log("hide " + holderArr[b]);
        document.getElementById(holderArr[b]).style.display = 'none';
      }
    }
    console.log("show " + data);
    document.getElementById(data).style.display = 'block';
  }

  showHair(data) {
    let z;
    for (z = 0; z < hairButtons.length; z++) {
      if (data != hairButtons[z]) {
        console.log("hide " + hairButtons[z]);
        document.getElementById(hairButtons[z]).style.display = 'none';
      }
    }
    console.log("show  " + data);
    document.getElementById(data).style.display = 'block';
  }

  showEye(data) {
    let a;
    for (a = 0; a < eyeButtons.length; a++) {
      if (data != eyeButtons[a]) {
        console.log("hide " + eyeButtons[a]);
        document.getElementById(eyeButtons[a]).style.display = 'none';
      }
    }
    console.log("show " + data);
    document.getElementById(data).style.display = 'block';
  }
}
