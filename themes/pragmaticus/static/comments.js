const autoExpandTextAreas = () => {
  const autoExpand = function () {
    const MAX_HEIGHT = window.innerHeight / 3;
    this.style.height = 'auto';
    this.style = this.scrollHeight > MAX_HEIGHT ? `height:${MAX_HEIGHT}px` : `height:${this.scrollHeight}px;overflow-y:hidden`
    this.scrollIntoView();
  }

  for (textArea of document.getElementsByTagName('textarea')) {
    textArea.addEventListener("input", autoExpand, false);
  }
};

// const repliesButtonsAddMentionToReplyBox = () => {
//   for (replyButton of document.getElementsByClassName('reply-button')) {
//     replyButton.addEventListener("input", autoExpand, false);
//   }
// };

window.onload = () => {
  autoExpandTextAreas();
  // repliesButtonsAddMentionToReplyBox();

  // for (textArea of document.getElementsByTagName('textarea')) {
  //   // textArea.setAttribute('style', 'height:' + (textArea.scrollHeight) + 'px;overflow-y:hidden;');
  //   textArea.addEventListener("input", OnInput, false);
  // }

  // function OnInput() {
  //   if (parseInt(this.style.height) > this.scrollHeight) return;
  //   console.log('DDV', this.scrollHeight, this.style.height);
  //   this.style.height = 'auto';
  //   this.style.height = (this.scrollHeight) + 'px';
  //   if (this.scrollHeight > 200) {
  //     this.setAttribute('style', 'height: 200px');
  //   } else {
  //     this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  //   }
  // }
}




