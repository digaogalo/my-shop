
class Produto {

    constructor() {
        this.id = 1 
        this.arrayProdutos = []
        }

    
        salvar(){
          let produto =  this.lerDados()

          if (this.validaCampos(produto)){
            this.adicionar(produto)
          }

          this.listatabela()
          this.cancelar()
        }

        listatabela() {
            let tbody = document.getElementById('tbody')
            tbody.innerText = ''

            for(let i = 0; i < this.arrayProdutos.length; i++) {
                let tr = tbody.insertRow()

                let td_id = tr.insertCell()
                let td_produto = tr.insertCell()
                let td_valor = tr.insertCell()
                let td_acoes = tr.insertCell()

                td_id.innerText = this.arrayProdutos[i].id
                td_produto.innerText = this.arrayProdutos[i].nomeProduto
                td_valor.innerText = this.arrayProdutos[i].preco

                td_id.classList.add('center')

                let imgEdit = document.createElement('img')
                imgEdit.src = 'img/edit.png'

                let imgDelete = document.createElement('img')
                imgDelete.src = 'img/bin.png'
                imgDelete.setAttribute('onclick', 'produto.deletar('+ this.arrayProdutos[i].id +')')

                td_acoes.appendChild(imgEdit)
                td_acoes.appendChild(imgDelete)
            }
        }

        adicionar(produto) {
            this.arrayProdutos.push(produto)
            this.id++
        }

        lerDados(){
           let produto = {}

           produto.id = this.id
           produto.nomeProduto = document.getElementById('produto').value
           produto.preco = document.getElementById('preco').value

           return produto
        }

        validaCampos(produto) {
            let msg = ""

            if (produto.nomeProduto == "") {
                msg += "- Informe o nome do produto\n"
            }    
                if (produto.preco == "") {
                    msg +=  "- Informe o preço do produto\n"   
            }

            if (msg != "") {
                alert(msg)
                return false
            }

            return true
        }

        cancelar() { 
            document.getElementById('produto').value = ''
            document.getElementById('preco').value = ''
        }

        deletar(id) {
    alert(`delete o ID ${id}`)
        }

}

var produto = new Produto()