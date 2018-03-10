import React from 'react';
import './dashboard.css';
import {connect} from 'react-redux';
import {fetchCat, adoptCat} from '../../actions/cat';
import {fetchDog, adoptDog} from '../../actions/dog';
import Pet from '../pet/pet';

export class Dashboard extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog())
  }

  render(){
    if (this.props.catLoading || this.props.dogLoading){
      return <p> Searching for furry friends...</p> ; 
    }
    else{
      return(
        <section>
          <h1>Queue's Animal Adoption Agency: </h1>
          <p>Take Home a Furry Friend!</p>
          <p>
            The adoption process works strictly on a first-in, first-out basis.
          </p>
          <p> 
            You can adopt a cat, or a dog, or both, but you may only adopt the oldest one (by arrival time, not age) that is in the shelter.
          </p>

          <div className='animal-sections'>
          <Pet animal='cat' animalInfo={this.props.catToAdopt} onAdoptPet={()=>this.props.dispatch(adoptCat())}/>
          <Pet animal='dog' animalInfo={this.props.dogToAdopt} onAdoptPet={()=>this.props.dispatch(adoptDog())}/>
          </div>
        </section>
      );
    }  
  }  
}

const mapStateToProps = (state, props) => {
  return ({
  catToAdopt: state.cat.cat,
  dogToAdopt: state.dog.dog,
  catLoading: state.cat.loading,
  dogLoading: state.dog.loading
  });
};

export default connect(mapStateToProps)(Dashboard)