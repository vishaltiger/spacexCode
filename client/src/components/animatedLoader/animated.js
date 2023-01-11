import './animatedLoader.scss';
import rocket from './rocket.jpg';
function AnimatedLoader(){
return(
    <div class="animatedcontainer flex justify-center">
	<div class="item">
        <img src={rocket}></img>
    </div>
</div>
)
}

export default AnimatedLoader;