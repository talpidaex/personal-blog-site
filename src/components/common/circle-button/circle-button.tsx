import { Icon } from "@iconify/react";

type Props = {
    iconType: string,
    width: number,
    height: number,
    action: Function,
}
export default function CircleButton({ iconType, width, height, action }: Props) {
    return (
        <button onClick={() => action()} type="button" className="p-3 border-2 border-gray-200 rounded-full hover:border-black transition duration-200">
            <Icon icon={iconType} width={width} height={height} />
        </button>
    )
}

CircleButton.defaultProps = {
    iconType: "bi:emoji-sunglasses",
    width: 24,
    height: 24,
    action: () => { }
}