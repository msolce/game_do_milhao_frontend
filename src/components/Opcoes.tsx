import React from "react";

export default function Opcoes(props:any){
    const {pergunta, setPergunta}=props;

    const changedState = (e:any) => {
        setPergunta({...pergunta, resposta:e.target.value})
    };


    return (
        <>
            <div>
                {pergunta.respostas.map((e: any, index:number) => {
                    return (
                        <div className="form-check" key={index}>
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1" 
                                value={e}
                                onChange={changedState}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {e}
                            </label>
                        </div>
                        )
                    })
                }
            </div>
            {pergunta.resposta}
        </>
    )
}