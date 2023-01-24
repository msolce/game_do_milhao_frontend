import React from 'react';

export default function Pula(props:any){
    const {pula}=props

    return (
        <>
            {pula.map((e:any, index:any)=>{
                return (
                    <div key={index}>
                        {e? (
                            <>
                                <span>
                                    <button key={index}>Pula</button>  
                                </span> 
                            </>
                        ) : ('Já Pulou')}
                    </div>
                )
            })}
        </>
    )
}