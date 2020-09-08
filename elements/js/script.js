'use strict';

const box = document.getElementById('box');

const buttons = document.getElementsByTagName('button');

// console.log(buttons[0]);

const circles = document.getElementsByClassName('cirlce');

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item)
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);