import { Places } from '../../model/DummyData'
import { PlaceModel } from '../../model/PlaceModel';


const initialState = {
    userPlaces: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLACE":

            return {
                userPlaces: state.userPlaces.concat(action.newPlace)
            }
        case "FETCH_PLACES":
            const arrayFromDb = action.placesArrayFromDb
            let placesWModel = new Array()
            
            arrayFromDb.forEach(element => {
                let placeBuilder = new PlaceModel(
                    element.id,
                    element.name,
                    element.city,
                    element.adress,
                    element.lat,
                    element.lng,
                    element.imgUrl,
                    element.date,
                )
                
                placesWModel.push(placeBuilder)
            });
            console.log(arrayFromDb)
            return{
                userPlaces: placesWModel 
            }
    }
    return state
}