import { updateBreadcrumb } from '../js/breadcrumb.js'

const BOT_REPLIES = [
  "Je comprends votre question. Pour plus de détails, consultez notre centre d'aide ou contactez le support.",
  "Bonne question ! Vous pouvez retrouver cette information dans la documentation Weenat.",
  "Je transmets votre demande à notre équipe support. Vous pouvez aussi les joindre au +33 7 84 96 84 56.",
  "Merci pour votre message. Notre équipe est disponible du lundi au jeudi de 9h à 18h.",
]

document.addEventListener('DOMContentLoaded', () => {
  updateBreadcrumb()

  const overlay = document.getElementById('help-chat-overlay')
  const openBtn = document.getElementById('help-chat-btn')
  const closeBtn = document.getElementById('help-chat-close')
  const input = document.getElementById('help-chat-input')
  const sendBtn = document.getElementById('help-chat-send')
  const messages = document.getElementById('help-chat-messages')

  function openChat() { overlay.classList.remove('hidden'); input.focus() }
  function closeChat() { overlay.classList.add('hidden') }

  openBtn.addEventListener('click', openChat)
  closeBtn.addEventListener('click', closeChat)
  overlay.addEventListener('click', e => { if (e.target === overlay) closeChat() })

  function addMessage(text, type) {
    const div = document.createElement('div')
    div.className = `help-chat-msg ${type}`
    div.textContent = text
    messages.appendChild(div)
    messages.scrollTop = messages.scrollHeight
  }

  function sendMessage() {
    const text = input.value.trim()
    if (!text) return
    addMessage(text, 'user')
    input.value = ''
    setTimeout(() => {
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)]
      addMessage(reply, 'bot')
    }, 600)
  }

  sendBtn.addEventListener('click', sendMessage)
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage() })
})
