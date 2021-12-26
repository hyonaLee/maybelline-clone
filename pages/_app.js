import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/compnent/Top'
import Footer from '../src/compnent/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
    )
}

export default MyApp

// app.js를 이용하면
// 페이지 전환시 레이아웃을 유지할 수 있습니다.
// 페이지 전환시 상태값을 유지할 수 있습니다.
// ComponentcomponentDidCatch를 이용하여 커스텀 에러 핸들링을 할 수 있습니다.
// 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다. 
// 글로벌 CSS를 이 곳에 선언합니다.