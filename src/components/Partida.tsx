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
            .then((res: any) => {
                return res.data
            })
            .then((data: any) => {


                if (data.hasOwnProperty('isFinished')) {
                    setPartida({
                        ...partida,
                        totalRespondidas: data.totalRespondidas,
                        isFinished: data.isFinished
                    })

                } else {
                    //    setPartida({...partida, totalRespondidas: data.totalRespondidas}) 
                    setPartida({
                        ...partida,
                        totalRespondidas: data.totalRespondidas
                    })
                    setPergunta({
                        pergunta: data.pergunta,
                        respostas: data.respostas,
                        pergunta_id: data.pergunta_id,
                        resposta: ''
                    })
                }

            });


    };



    return (
        <>
            <div className='p-3 mb-2 bg-secondary text-white'>
                {!user.login ?
                    (<div>Por favor realizer o login para jogar</div>) :
                    (partida._id === '' ?
                        (<>
                            <div>
                                <button onClick={requestNovaPartida} className="btn btn-success">Nova Partida</button>
                            </div>
                        </>) :
                        (partida.isFinished === true ?
                            (<>
                                <div>
                                    Você errou!

                                    <div>
                                        Você acertou {partida.totalRespondidas} perguntas
                                    </div>

                                </div>
                                <div>
                                    <button onClick={requestNovaPartida} className="btn btn-success">Iniciar Outra Partida</button>
                                </div>

                            </>) :
                            (<>
                                <div className="container-md">

                                    <div className='h1'>
                                        {pergunta.pergunta}
                                    </div>

                                    <div>
                                        <Opcoes pergunta={pergunta} responder={responder} setPergunta={setPergunta} partida={partida} />
                                    </div>

                                    {/* <Pula pula={partida.pula} /> */}

                                    <div>
                                        Você acertou até o momento: {partida.totalRespondidas}
                                    </div>

                                </div>
                            </>))
                    )}
            </div>
        </>
    )
};