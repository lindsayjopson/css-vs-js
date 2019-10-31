import { createGlobalStyle } from "styled-components";
import {
  baseFontFamily,
  baseFontSize,
  baseSpacing,
  grey,
  greyLight
} from "./globalVariables";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${baseFontFamily};
		font-size: ${baseFontSize};
	}
	
	h1,
	h2,
	h3,
	h4 {
		margin-bottom: ${baseSpacing};
		font-family: ${baseFontFamily};
		font-weight: 600;
		color: ${grey};
		width: 100%;
	}
	
	a {
		color: ${grey};
		text-decoration: none;
		
		&:visited {
			color: ${grey};
		}
		&:focus {
			outline: none;
		}
		&:hover {
			transition: all 0.2s ease-out;
			box-shadow: 0 -1px 0 0 white inset, 0 -2px 0 0 ${greyLight} inset;
			color: ${greyLight};
		}
	}
	
	table {
		width: 100%;
		th,
		td {
			padding: ${baseSpacing};
		}
		th {
			text-align: left;
			background-color: ${greyLight};
			font-weight: bold;
		}
		tr {
			padding: ${baseSpacing};
			border: 1px solid ${greyLight};
		}
	}
	
	pre {
		display: inline;
		background: #f6f8fa;
		padding: 5px;
		border-radius: 3px;
		font-size: 85%;
		line-height: 1.45;
		font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
		font-size: 12px;
		color: ${grey};
	}  
`;
