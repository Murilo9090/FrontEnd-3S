import "./produtospage.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState();
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(null);
    useEffect(() => {
        const getDados = async () => {
            try {
                const retornoAPI = await axios.get("http://localhost:3000/produtos");
                const dados = await retornoAPI.json();
                setListaProdutos(dados);
            } catch (error) {
                console.log(error);
            }
        };

        getDados();
    }, []);


    const cadastrarProduto = async (e) => {
        e.preventDefault();
        if (titulo.trim().length === 0 || descricao.trim().length === 0 || isNaN(preco)) {
            alert("Preencha todos os campos!");
            return;
        }
        const objProduto = {
            nome: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
        };
        console.log(objProduto);
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(objProduto),
            });
        const produtoCadastrado = await retornoAPI.json();
        setListaProdutos([...listaProdutos, produtoCadastrado]);
        limparFormulario();
        } catch (error) {
            console.log(error);
        }
        
    }

    function limparFormulario() {
        setTitulo("");
        setDescricao("");
        setPreco(0);
        setImagem("");
    }

    const deletar = async (id) => {
        const retornoAPI = await axios.delete(`http://localhost:3000/produtos/${id}`);
        setListaProdutos(listaProdutos.filter(produto => produto.id !== id));
        return produto.id != id;
    }

    const editarProduto = async (e) => {
        e.preventDefault();

        if (
            titulo.trim().length === 0 ||
            descricao.trim().length === 0 ||
            isNaN(preco)
        ) {
            alert("Preencha todos os campos!");
            return;
        }

        const objProduto = {
            nome: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
        };

        try {
            const retornoAPI = await fetch(
                `http://localhost:3000/produtos/${idEditar}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify(objProduto),
                }
            );

            const produtoAtualizado = await retornoAPI.json();

            setListaProdutos(
                listaProdutos.map((produto) =>
                    produto.id === idEditar ? produtoAtualizado : produto
                )
            );

            setEditar(false);
            setIdEditar(null);
            limparFormulario();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="produtos">
            <h1 className="texto-produto">Cadastro de Produtos</h1>
            <div className="div-cadastro">
                <form action="" className="cadastro-formulario" onSubmit={editar ? editarProduto : cadastrarProduto}>
                    <input className="input-formulario" type="text" placeholder="Nome do Produto" id="titulo" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} />
                    <input className="input-formulario input-descricao" type="text" placeholder="Descrição" id="descricao" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} />
                    <input className="input-formulario" type="number" placeholder="Preço" id="preco" value={isNaN(preco) ? 0 : preco} onChange={(e) => { setPreco(parseFloat(e.target.value)) }} />
                    <label className="label_upload" htmlFor="arquivo">Imagem do Produto</label>
                    <input className="input-formulario btn_upload" id="arquivo" type="file" onChange={(e) => { setImagem("/" + e.target.files[0].name) }} />
                    {editar && (
                        <button className="btn_cadastrar" onClick={() => {
                            setEditar(false)
                            limparFormulario()
                        }}>Cancelar</button>
                    )}
                    <button className="btn_cadastrar" >Salvar</button>
                </form>
                <div className="div-produto">
                    <section className="secao-produto">
                        {listaProdutos.map((produto) => (
                            <article key={produto.id} className="card__produto">
                                <img src={produto.imagem} className="img_produto" />
                                <h2>{produto.nome}</h2>
                                <span><strong>Descrição:</strong>{produto.descricao}</span>
                                <span><strong>Preço:</strong>{produto.preco}</span>
                                <button className="btn_deletar" onClick={(e) => {
                                    e.preventDefault()
                                    deletar(produto.id)
                                }}>
                                    Deletar</button>
                                <button className="btn_editar" onClick={(e) => {
                                    e.preventDefault()

                                    setEditar(true)
                                    setIdEditar(produto.id)

                                    setTitulo(produto.nome)
                                    setDescricao(produto.descricao)
                                    setPreco(produto.preco)
                                    setImagem(produto.imagem)
                                }}>Editar</button>
                            </article>
                        ))}
                        {/* <article className="card__produto">
                        <img src={imagem} className="img_produto"/>
                        <span><strong>Nome:</strong>Bomba</span>
                        <span><strong>Descrição:</strong>Bomba legal</span>
                        <span><strong>Preço:</strong>R$67,67</span>
                    </article> */}
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Produtos;