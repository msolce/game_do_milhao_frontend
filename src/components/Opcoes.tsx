import React from "react";


export default function Opcoes(props: any) {
    const { pergunta, setPergunta, responder, partida } = props;

    const changedState = (even: any) => {
        // console.log("🚀 ~ file: Opcoes.tsx:10 ~ changedState ~ e", e.target.checked)
        // e.target.checked = true;
        setPergunta({ ...pergunta, resposta: even.target.value })
    };


    return (
        <>
            <div>
                {pergunta.respostas.map((res: any, index: number) => {
                    return (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id={`flexRadioDefault${index}`}
                                value={res}
                                onChange={changedState}
                                checked={res == pergunta.resposta ? true : false}
                            />
                            <label className="form-check-label" htmlFor={`flexRadioDefault${index}`}>
                                {res}
                            </label>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={responder} className="btn btn-success">Responder</button>
            </div>
            
            <div>
                Sua resposta é:     {pergunta.resposta}
            </div>
        </>
    )
}