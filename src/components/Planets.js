import Planet from "./Planet";
import Things from "./Things";

export default function Planets() {
  return (
    <Things name='planets' Child={Planet} />
  )
}