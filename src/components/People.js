import Things from "./Things";
import Person from "./Person";

export default function People() {

  return (
    <Things name='people' Child={Person}/>
  )
}