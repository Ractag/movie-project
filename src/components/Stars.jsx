import { Rating } from "react-simple-star-rating";

function Stars() {
  
    const handleRating = () => {
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