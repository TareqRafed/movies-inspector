import {valueExists} from '../componenets/utilities/helpers/checkValueInObj';


let testObj = {
     "adult": false,
      "gender": 2,
      "id": 819,
      "known_for_department": "Acting",
      "name": "Edward Norton",
      "original_name": "Edward Norton",
      "popularity": 7.861,
      "profile_path": "/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg",
      "cast_id": 4,
      "character": "The Narrator",
      "credit_id": "52fe4250c3a36847f80149f3",
      "order": 0
}

// Pass

it('value Exists', ()=>{
    expect(valueExists(testObj,'Acting')).toBeTruthy();
})