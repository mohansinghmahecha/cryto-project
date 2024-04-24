function FooterComponent(){
    return (
        <div className="border-4 border-sky-600">
            <h1>bye</h1>

             <div style={
                {
                    display : 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    backgroundColor : 'red',
                    height : '200px',
                    gridColumnGap : '100px'
                }
             }>

                <div>1</div>
                <div className="" style={
                {
                   
                    backgroundColor : 'pink',
                    height : '200px',
                  
                }}>2</div>
                


             </div>
        </div>
    )

}
export default FooterComponent;