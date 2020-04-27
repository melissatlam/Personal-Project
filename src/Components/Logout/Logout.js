import React, {Component} from 'react';
// import './Profile.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../../redux/reducer';

class Logout extends Component {
    
    handleLogout = () => {
        axios.get('/auth/logout')
        .then(() => {
            //clear the user from redux or local state
            this.props.clearUser();
            //route the user to the landing page
            this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }


    render(){
        return (
            <div className='profile'>
                <h2>Are you sure you want to leave?</h2>
                <img src ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUVFRgVFRUVFhUVFxcVFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL8BCAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABAEAABAwIDBAcFBgUDBQEAAAABAAIDBBEFITESQVFhBhMiMnGBkXKhscHwI0JSstHhBxVic/EzQ1MUJJKiwhb/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACMRAAMBAAMAAwACAwEAAAAAAAABAhEDITESIkFRYRMycUL/2gAMAwEAAhEDEQA/ALZHrhKVmpN0bHNcKLro7FOBLHZKiSZe2+yhA83KCZmEwuOaMa7JLg/JEsfkh8g4TD1J8uio21WJrlbTBLiulxsqXvVrDkjouFXWdpXh6FLe0rgwoNjImSgZndoosoJ47RW0xYGqYtZQa6y8XIUPJYNFRK1SL8iojTNOibWk2NsE1gOQSsOyTKE5BI/Q/hN5Q9QVc5DTrAEPSSO8YTT+FtA8bUh7rnC3kgceH2SdfwsmvC5vB6vxenNym6qD2/RSiH2z/YCrqe/6IgN+1d7AVkRYqxDUoLCJD9pyNkZX6pbSHsv9oqf6UXgn6TVmzFI6+jT6lYH+Hd/5jT+2fyuWk6ZVLeqc2+ptZIugTQMQp/b/APkpU+xmuj7Pi/eHglxTHFu8PBLymr0E+Hafvs9pvxC8vU/fZ7TfiF5AzMBsIgOsFQHZq+QdlcbO6S2J9wu3Q0ROypaI7hsL3LheQFAuUTJktpsKzM66tgdmhmuuVZBqnEGDgrGEWQzjZe2uaXRsLqe7n2CONQ1uTWhx4nj4IKKwYXbyQB4DM/JWRG6Wq7xDTG9k3z3PcB9x9yBkiu4lt772nXy4pm1qtEAPju8UV8jNIRscc1buRNZTan72p580A59gs3oETa7JeuLaoYPUXFVXhNhpR9O/IJK2QpnSv7KR+jfgWXIecqW0h6o5eSIoDipBiOaVdBekZp5hCG362QC/C5ARE0p2XAiwskPRqIGrjJGYkbb1V4eYc1ps++S5vHki3jtu9lCuHbHkjJ+872VZEWIq7VZ98knaawC1zckp/W6lLGNycpZpTcR8nxmZzpHtOdne9HdBoiK6nNj3+H9JQuLROZM97XX7RyTroZi4dVwsc2xL7D0KVejPw+rYt3h4JeUwxXvDwS8pq9BPh2Dvs9pvxC8uwDts9pvxC8sFnzgusUe0XCCmiJKKoLrlrw653S2NtgouG9X7OSgkKFYbkobFwibZFDBFAZVsW3qUBzUJxkqabVOvBH6FyuJK626jbNWPOSAcDW9xo5n5IqnagIDePO52XD3j9kbApP8A2LR/qEOVlNJmqHlRBsqy8A1qGVdT3btDULLYk3ZN9x+O8LY4dLtCx4JPilG3a2XZBxtfgdxRtY9RGH/5Mux6uJWgZ0IcDnOwj+lpJRbeg5IymPm3L4qmMm7RlnORlG/ILVU/RWGOzpHl9t2QbfwUmmljPcbkUjxesKpvxGesbaKmW/BaSpxmHPIZHRAz9IYR90W8Evzn+RlNP8M1iDewcs7If+GFIH1D3OAOyRbxT92P05OcbfRHdGxTskL4wGl+ZCrx8s6kS5eK802JH2g8QiJXZv5WCHieHSAg3CJqjk/yXUjkYhqzqgAOyUZVnVCu7vkpoofJcWe4TPyv2invRnCXxyxVMwEbWEPAPfcMxk0fNOMPwlrZHTyi5Lj1TTyPeI4cFdUnaNybkqNXj6Lxx/L3wc1nSmFztHi2Wg/VGRyBwDmm4OYIWIqoU06IVJ7cRNwO035/JLPI28Y18SldGng77fab8QvL0Hfb7TfiF5WRBnz9xNsldQkgZqvaU43rjZ3LNCHSKIKFklUo5N6KA2Fv0Q4suOlyQFRNomlaLTwNkAtmqI7Ieae7V2B2SdLEJvYWD2lOV2SHe5e6y+SDQyf4F4fPtFzeLCR4tz+RR9JNe1lLAei08j2SEdW0G+erhwDUYMJdHI9lrbHHhuKS4epopx8i7TOTNyuh9pFuGVkvlbYp8Cn0NcFeNuyL6SU4LUr6PDal8OP+VqsSpTIQxo8eXiqOdnDmqvjyaZnB8TkYQD2mjcdw8VroK4PYHA7N+YQkOAtAtfxPFXMpY2ZAEqcTU+mu4p9EZOr+8+/kSqjLTj7rfNqvfAw7lwUbOARxgTX9i+qbTPuDHG6/EAJXPhdK7/ZaPC4+acVVI38A9EAGD8PvSNlJzOhFL0Njcbte5o4d4KyDo05mbZ7nddtk+LvEKP8A05do8+aDSY3yaKMOqpoD2xtDiMx+y1DKxskZc03uVn4MMeNZAURSwOjJtodRu8ctFbipz1+EeWVXf6eqjqhpHANucgr6jP1S/GHHZDQMr3JTVfxQkR8mATTbR2vTlyQbnqVS+wAQwKgl0dqZ6c5KfRg/9yf7bviFRUOsEw6GwEmWU7yGDyzPxC0L7Ccj+pqYO+32m/ELy9T99vtN+IXl0o42fP7rxNlVtKV7rkw7F6QkfkoskyTLDOjtRP3GbLfxuyHlxWvw7oLC2xlcZDw7rf1VZhsnXIkfPDIc1JmFzyd2GR3g029V9dhooIso4mjwA+K9JWcMk3xSJvkb8R8ub0VrDpA4eJaPmjabobV72tb4uHyW9fXWQkteTvQblBXyZnoeg7z35mjk0Ep/g/ROGE7RvI/dtaDwCcYfTkDPvH3BNI4w0XKpKJ1RXGzZFzr8Eoxtwu2+rwW394CPnnuUl6Xx3haRq127mP2CFPEaFtIzs2TiDxS3Er2JCKNWX22tdL/qh6gHcppp+Hck16EdCzeU9vP8J/xl6r6K1thzKznQrBg1plc2znbuHOy00wXRPSOHlrbBJX8FRsq6VDuep0wJEtqyoqakNGWaqmfwKEnekbKKQerq5nmzAAOKhFT2Pbfnwuqp5zazTa+8cOKDiw6x2tsk81B7p0LMHULmlwaH58OSZuoy0XDgkVE1ocHbx9WTSpqrNy35K3Hmdkr3ejm1/ULrram2oSSekbqSbnO91QKx0Zs47bPVT+eMf4aaUvBzFil9dSbeYNjw4quN4cNpjsuCujkuqaq9Exz4ZbEmlpsclTFxWixylD2bW9vwWekFgs1iKxWoBqyXHZbmXEBo5nILcYbSCGJkY+6MzxOpPqk3RzC7u69wyF2xjn953y9VoijxznZHlrXhKn77fab8QvLlP32+034heVURZ88oad8pDY2lxPD4ngt5gXRdkVnS9t/D7o8t6PwqkhpxsxN8XHMnxKKlxJjfFIpS7Y9W30g5psM8hwQs1cOKR4hjRdkCl7ao8Utcv4gzxfrHdTXoR9XdK3TqLprapNbKKUg2WoTHo3h7pH9Y4dlunAlR6PYQZftJBZm4fi/Zax0rWgAZAaAZBNHF3rEvkxfFFzIwEtxGr3BXz1PZySaaS5VqZGUXsfvQuIv2mOHL4KuSpsEN1yi6LJfolbRBrG37zhcnlusjsPo2Pe1gzO/5ruIYc9zSY7nK+yL5eA4LnRIiNrnk9ouIN91tyEPHmFLp1O6biGMBoAVVUrYH3AtwVFUV0N9HGvQCV2aFlk3K53mhpB/k5KTLIoqJ2sFzqks8skjuwCfBM5oxqTfl+yDlxFre7lu0UqTZaWkUDCt7jYgcVCWQsvbP6IV0UofmXZcr/XBekYCCAcrD4f4Qc9dGV99gdNJZ4z7yd1Qu0EblnnixHEFOOvsy/JbjfTTG5F40CR1AJz96ullaRbJATHsk3zPzVlHGAFNP8GaXpfTyDcUXG9BuhBzbrvXYZdxTS8FpaMGv9Cs5WRBshaTlfJOS9JcWt18Zvrs3HnmrbqwRdG1qYgxrGtFgG2CFJRuJHu+CAJVq9IT4WU57bPab8QvKNMe2z2m/ELyBmAyYhsjmgTOXFC9YrWShR+LZbUiwxquR9lbBtSHZb5ngOKKlpIwLX2jzTLjFdiOStzRWBwuqJ2R27N7uPBo1/TzS2voyHdm2ZyK2fQajEYe8m7iAPK5RU9mqsWmvcQxoaBYAWAHBATkO3oiYEj5pZWUpGYcQeSemRlE3yFuunFD1T8roVuLAHq5cr5BxFgUNXzGM8WHfw/ZI2sKKXoNJV7RyVsWSBlZsuDx3Sc0RJMBbNQ/6Wf8AQ5w+r2XsvoTb9E1xPDmSE5bJOZc3Inx4rIzz2DTwIPoVvKUbeZ4BdMdrDnvp6dpqbYYGg3sLZqmrbcIqtfst8kqhqto7J1TNrwRL9BXyDig6yUkXvZoQ+JVOwDZpNuHEL59i3SWaa46xtPGOsAdsmR7nxgdlrRk25cBcnjwSTLaKNpD7EsWY022revuySYYh4FYaoleXkde51/vHQ+RGStoap7SWO3bxoRxSVxP0eeZeG7jqyAHBoF9craZ2RdFXE68Vn6Ksu22/63JjDcAlRrUWlJhstSCX+KMmntGOeX6pBTtJOe8/FGYnJo3gkT6ZRrtBDqgbQHAXTGGcLK0shuXIn/rHblpeGtGkkeALheikB11SAVp2c81OkrWg9ogeJTesXMQ+qLgJDjEoMkeeYc0eW0CnDpLsvfLW/JYiWvL5g46bQsOV1WFrJW8R9fxI93wQJV9dLct8EKSuivSE+FlP32+038wXlCB3bb7bfzBeQRmZcRPP3T6KcVBKfu2HNaJ8EnC/guNp5PwlbA6C4RTOZtk62tySWOse7a2/xG1sshotfTULtTvGiSYtgcmexYjxsmfgE1ohqpQWnitR0Bqw8uYcjb1tv96zT+jkxyJA96fdE8PdDO253EaW3Kc+j14fQZu6gpm3CI6zcVCRp0VKIIy2NUO2CLXyWejxF8V4pgSw5AnMjkSvoklOLeSyONYaHE3XPctdo6YtPpi6kqhnG7MfdPJCuqNl4Y7yPEJdWUkkQu0lwbpxA58VGSqEzNe0NDwKiWND1pJaNxcBfzX1OkbZosvkHR+XrSxp7we0HxDl9difl4Lp4PDl5vRVjkpz4BZtsrtoO0zWlxgX3apHXts1a13oYfWBOKUwkaQPvZ+e9fHcVjfA6aNzbguc5riLgbXfaeF7A34hfVsIr9u8R7wzbz5JZ0iwcS3NrH4p4voWp7w+MdbnfZz8rKcF3PaAC47yNM9TdaqowrYceyMtSQCtF0bwBtuvlbZo7jLW2v6zy4BB0gqGIcHwh5BNiG/iOhHLimLnBoI4b+KaY1iwB2W67gEkfsAbUnadrY6Dy3rlr7s619UFYfEX3Lc7D3qmsZd2apHSAt7p8hl5BFU+OiXJ7B5gJv8AF9RP8v2B6VrRkleJyOjfYjLUHcU6bEy92ZHhu/ZEmmZMwseMveDx5FSX1rsq/sujGy1r35N3D6KUieQdoSWPDZB3804qMPfTyvY83BHZfyvldJ2U7i6wF7bwcrcSuyUs8OK3X8m56N1L5aZzXDtAOabacLoZuCm4y3hOuiFLsQAnVxJ8tLpjI/OyE9Noau0tGUz+032Qu7SqnPaHsrxKLfZkui2F3bZ7bfzBeVMDvtGe238wXEZFo9LjfDJMKavu25Xy7+ZvOQBREOPyMs1wy8bpE6/R2pZ9FmxayElxMlYz+et3uz8VNuLtO9TqqHmZNQcStvVQxizmnQBwueV81mJcUb+JBVOJC2TghLoNKT7mQDnxRTI9yxXQLpMyph6suHWxABwvm5u5w48CthFUdi5K7EcbKqs7IKyOKzG+R4p/itRcHPcsjVyc1HlfRbiXegU0uay2KyNgkDm5B5s4bgeIWjfOFn8Zpmy2DvHzXPJev6GnRif/ALqIbnPb8br68J7HzXwLo9VGCqhD+00SNseV7WX2+pfkbeKvH1RC/sw2o7TbpDXgE24JnTVQIDb66JXPHaUgn3p32LPTMviRc2RrmXBBuCFqRIJIg/Q2zF96qqcNuRYXN0wmmZC3Ztdxytz4JJlpsd1uYZOOg62oa1zOwLvflqG6DzJHvRWO1zrtijAu42G4D9k2klDG2FjI7W3HgOQSiWBrAXO7TzqeHIfql+P4Oq/TN4tE2AOdtbTzYO0I14bkgptqqkLdrui7gMt9skwxyaIuIO0T7R+B0CSYVJ1Mm2A4jPPXI6j1VJSROm36aOshp2kRAWJFwRluzz3lKoImbDi93dc4A8gbDzQFdjDXzM2bktLtrI5XCpiq2FzGvNmkucb7yDkPeg9G+u4MnSmN4sbg5i/BO6SVzztNAuO8L5kW1txWXxeYPIEbhlv+vrNPME6xo3HjY/qkudQ0VlYM8WhEsQdbtN0PI6hK6HBS4i5sN9t60L2EsIA1sffmpws2SAVOaa6KUk+w2Noa0NGQAsEBI/PJF1JyySzYN9VWSdD15zb7K84oQ1zLgF4HZzuVJ9Yy3fb6hF+gXhOM9tn9xn5gvIaCujMkY2236xlhf+oLiefCd+ik9G49+fqrI+jkZ3fJaUt5KbRyS/EbTMjotAPuBd//AD8I+4FqAzkoSRk8vJByFUZeTAYv+MKH8ljGXUt9Fo3QqBjQSDqM9HhIjcHxt2HDQtNiPRaCixORxa2cksvm4Czh4WUo6fkr20x4KsolTQ1NM1wBLjY5tv8Aebu81lcakAJDNFpHS2hLXHIZttqOSwvSPE87tie7jZjkOSNXRuO8fYNLNbUpHWV93GyBxHGHuP8ApPb4gpWalx+6fRSXHhR8mhFXPJttcATskEDwN19+wTEGzQxyabbASDuNswvzm+AuPa7PK2070HzIX0/+F+Ltaw0ruyQbs2nNub6jZHd8LqudEk+z6FFS/aN4A3V7acum2juGllKnlzz1CLq3FjOwO07O6MyaqKqisEbTpfeb6DxSmjpXOLp5Dmf9Jp3D8XnuQ5pQ5xklddrdGC1ieLjqfD4oeHE5ZZbbOzHe1yRcjkEKf4NK66LqpoYC7MuJ3a+ST1Mm83zBu02uOFzuTnEB3tNMv3KzzYCe+4Zk7XM30sPRZThnWmVqItqRxda18r33m9r8UtrJXXOyDl46J9iIa3aZGCT3rnUg906aCyztRrrnvsjmCsFkkudoajXwVBANrgEDS6N2LC+iqiANrjf5IijGje15s4C2g3Wt8E1awxkEXLd+eny3pHENl1r5cQn9JJe97G4sNNR9cN6Wuyk9D2mnyHP68kdI0OA47ufJJ4NoG3DUD9U1DxfY4W1vqoZhfdI07+sa4X7Q0HhuQjr79VKqcYpmOabbd77wSN/JSxGp+0GWu/neypnQm9l8lMx1tpoOW8Kt+Hxf8bfQK7a0XSlaGQLSYfGJYyGgESM/OF5F0w+0j/uM/MF5PBOxoV1qrJPBdDk4paAoOC61y4TyWMVuHNdjYpOaOXvU4G5oBLo48tFFyLaFx7QmEB5h2LJLWUoJT2UCyWzgX0SUx5Qllw1p4IV+ER8G+n7J4WD8PvVbxy96TR8Rn5MDi/C30XoMDaxwdGLOBuCE6Lbnu+d0ZQ04GZHvRQGiyateIwSCHjQi36prR4sZYmvdYOB2ZAN3A+BQdRBtCyphpBE1x4i1rnO/FUlknPQwrpQG6XH1wQtYS0NIyyByyHuSX+YTtBBiLwdHAgEeI3ouDF+sj2JWPYdAdm4/9ScljdlgrA9u0AAdHjmMteCUVt7EsfYuGVgzK2tt5UW1DYnk7fZd3hxPgh8Tq49kkbBIPZBy8b+n+E+CiiuNxt7Whs7TM6fBI5QA42GRzBvuuRr5JhimJxh2Vhlm2wzJGt/H4JFLVB1s91vDMn5pWHTs8l9Ch45SCBfNeI4/NQeBw9xQMNYH3tn6+SdYZJfQ934rIQ1JBzB5ZFOKTEBkQLG+6+/f9clgpm0pHm4vZvmT7kcIyZSfP3LL0NcCcwQRoQCbjnknUeIOPdYb8TcDhokaRRMXdLKl/WwiMiwJLs+YsPciGzFz7kb728c1RU0pLw43Pii2sG0EujfH9GvXDL9CumcfQK7bILhCz9CidLOOsjy/3Gbj+ILy5S/6kf8AcZ+YLyaRLGgv9f5XR9ZKIl4AKbXnknEOgH6C4bqwErhd9ZLYHSpX0+q4WHl6BWRMz/YfothmwwFdIUQvEIilMzUDLGfohHyIWTwCVoZMC6oncq5IT/hFk8veoX+rpMH0oaw8z5pnCyw0VEJzR4tZFIDZAL1QwEZrt1B58PQpkKwaSIW0VZiaBkEUR4KAaEBhc6ladWhUy0Ue9gPldNSwcFWYm8wthtEkuEwHMws/8AofyaHXqWeTQE9dBzURADvKGMOoS/ymAj/Sb6fuvfyeD/jb6FORTN4KqAXvuIJBtyJCVyH5IVnA4T/tj3rrMJjGjfQuTcRa7vUrj4req3xNouZhrBoPirm0YCMY3tFp4ZFcccwM0MDoDJQX3LzKIXRj3WvxCnFoCSikBsj1IsomAIl5ta+/Qrjm5pmgJlNNTDrGe238wXlZC60keZze38wXkZQtH//Z' alt ='sad dog'/> <br/>
                <button onClick={this.handleLogout}>Logout</button> 
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, clearUser})(Logout);