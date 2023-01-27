$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()
    const tarefa = $('input').val()
    const novoItem = $(`<li></li>`)
    $(novoItem).html(tarefa)
    $(novoItem).appendTo('ul')
    $('input').val('')
    $('li').click(function () {
      $(this).addClass('riscado')
    })
  })
})

