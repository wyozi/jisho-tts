const concepts = document.querySelectorAll('.concept_light')

let voice

function findTheVoice() {
  voice = window.speechSynthesis.getVoices().find(v => v.lang === 'ja-JP')
}
findTheVoice()
window.speechSynthesis.addEventListener('voiceschanged', findTheVoice)

for (const concept of concepts) {
  const text = concept.querySelector('.concept_light-representation .text').innerText
  var btn = document.createElement("a")
  var t = document.createTextNode("Play TTS");
  btn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voice
    console.log('speaking ', text, utterance)
    window.speechSynthesis.speak(
      utterance
    );
  })
  btn.appendChild(t);
  concept.querySelector('.concept_light-wrapper').appendChild(btn);
}