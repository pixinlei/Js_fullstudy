let isMobile = null
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    isMobile = true
} else {
    isMobile = false
}
console.log('isMobile:' + isMobile);
export default isMobile