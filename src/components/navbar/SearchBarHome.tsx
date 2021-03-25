import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import SearchContainer from "../../containers/search/search";
import {
	NavSearchWrapper,
	SearchCloseButton,
	NavSearchFromWrapper,
  HeaderWrapperHome,
} from "./navbar.style";

type NavbarProps = {
	className?: string;
};

const Searchbar: React.FunctionComponent<NavbarProps> = ({
	className,
	...props
}) => {
	const [state, setState] = useState({
		toggle: true,
		search: "",
	});

	const toggleHandle = () => {
		setState({
			...state,
			toggle: !state.toggle,
		});
	};

	// Add all classs to an array
	const addAllClasses = ["header"];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<HeaderWrapperHome className={addAllClasses.join(" ")} {...props}>

			<NavSearchWrapper className={state.toggle === true ? "expand" : ""}>

				<NavSearchFromWrapper>
					<SearchContainer />
					<SearchCloseButton
						type='submit'
						aria-label='close'
						onClick={toggleHandle}
					>
						<IoIosClose />
					</SearchCloseButton>
				</NavSearchFromWrapper>
			</NavSearchWrapper>
		</HeaderWrapperHome>
	);
};

export default Searchbar;
