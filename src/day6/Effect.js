import EffectBasic from "./EffectBasic"
import LayoutEffect from "./LayoutEffect"
import Timer from "./Timer"

/**
 * 리엑트는 화면에 그려주면 끝!
 * 부가적인 효과(사이드 이펙트)
 * 이걸 관리해주는 훅 useEffect임.
 */
const Effect = () => {
  return (
    <div>
        {/* <EffectBasic /> */}
        {/* <Timer /> */}
        <LayoutEffect />
    </div>
  )
}

export default Effect
