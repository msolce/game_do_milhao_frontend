import React from 'react';
import Requests from '../services/requests';
import Opcoes from './Opcoes';
import Pula from './Pula';

export default function Partida(props: any) {
    const { user, partida, setPartida, pergunta, setPergunta } = props;


   

    const requestNovaPartida = () => {
        Requests.partida(null)
            .then(res => {
                return res.data
            })
            .then(data => {
                console.log(data)
                setPartida(data.partida)
                setPergunta({
                    pergunta: data.pergunta,
                    respostas: data.respostas,
                    pergunta_id: data.pergunta_id,
                    resposta: ''
                })
            })
    };



    const responder = () => {
        const resposta = {
            partida: partida,
            pergunta: pergunta.pergunta_id,
            resposta_user: pergunta.resposta
        };
        Requests.responder(resposta)
                .then((res:any) => {
                    return res.data
                })
                .then((data:any)=>(
                    console.log(data),

                    setPergunta({
                        pergunta: data.pergunta,
                        respostas: data.respostas,
                        pergunta_id: data.pergunta_id,
                        resposta: ''
                    })

                ))
    };



    return (
        <>
            <div>
                {!user.login ? ('Por favor realizer o login para jogar') : (partida._id === '' ? (
                    <>
                        <div>
                            <button onClick={requestNovaPartida} className="btn btn-success">Nova Partidas</button>
                        </div>
                    </>) : (
                    <>
                        <div>
                            {pergunta.pergunta}
                        </div>

                        <Opcoes pergunta={pergunta} setPergunta={setPergunta}/>

                        <div>
                            <button onClick={responder} className="btn btn-success">Responder</button>
                        </div>

                        <Pula pula={partida.pula} />

                    </>)
                )
                }
            </div>
        </>
    )
};