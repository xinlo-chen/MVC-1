import './app3.css'
import $ from 'jquery'
const $square = $('#app3 .square')
$square.on('click', () => {
    $square.toggleClass('active')
        //如果有就移除，如果没有就添加
})