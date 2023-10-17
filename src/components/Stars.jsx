import { Rating } from "react-simple-star-rating";

function Stars({rating, setRating}) {
    

    const handleRating = (rating) => {
        setRating(rating);
    }


    return (
        <div className='stars-style'>
          <Rating
            onClick={handleRating}
          />
        </div>
      )

}

export default Stars;