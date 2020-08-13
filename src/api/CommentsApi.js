import React from 'react';
import axios from 'axios';

class CommentsApi extends React.Component{
    constructor(props){
        super(props);
        this.state={
             items:[],
             isActive:false,
        }
    }
    componentDidMount(){
              axios.get('https://hn.algolia.com/api/v1/search_by_date?query=1&hitsPerPage=50')
              .then(json=>{
                console.log(json.data);
                  this.setState({
                      isActive:true,
                      items:json.data.hits,
                  })
              })
              .catch(err=>err);
    };
    render(){
        let {isActive, items }=this.state;
        if(!isActive){
            return <h3>Loading...</h3>
        }
        else{
        return(
            <div className="app">
           <ol>
                        {items.map(item => (
                            <li key={item.id}>

                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 m-auto">
                                        <div class="list-group" id="list-tab" role="tablist">

                                            <a class="list-group-item list-group-item-action p-1 mb-4 word"
                                             id="list-settings-list word-break" data-toggle="list" 
                                              aria-controls="settings">
                                                  {item.comment_text} </a>
                                             </div>
                                        </div>
                                   </div>
                            </li>
                        ))};
                     </ol>
                </div>
       
        )
        }
    }
}
export default CommentsApi;