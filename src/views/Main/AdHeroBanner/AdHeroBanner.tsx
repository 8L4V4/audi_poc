import { MainPageAPI } from 'api';
import { useApi } from 'hooks/useApi';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { iButtonField, iPictureField } from 'types/fields';

interface iAdHeroBanner {
	heading_1: string;
	heading_2: string;
	image: iPictureField,
	radio_input: Array<iRadioInput>
}

interface iRadioInput {
	label: string;
	is_default: boolean;
	button: iButtonField;
}

export const AdHeroBanner = () => {
	const [data, setData] = useState<iAdHeroBanner>();
	const {apiCall} = useApi();
	const [btnData, setBtnData] = useState<iButtonField>();

	useEffect(() => {
		apiCall(MainPageAPI.getMainPageAdHeroData())
		.then(({data: {entry}}) => {
			setData(entry);
			const btn = entry.radio_input.find((input:iRadioInput) => input.is_default ? input.button : false)?.button;
			btn && setBtnData(btn);
		})
		.catch(err => console.log(err));
	}, [])

	const switchRadio = (button: iButtonField) => setBtnData(button);

	return (
		<div className="AdHeroBanner" style={{backgroundImage: `url(${data?.image?.url})`}}>
			<h2 className="AdHeroBanner-main-header">{data?.heading_1}</h2>
			<h3 className="AdHeroBanner-sub-header">{data?.heading_2}</h3>
                
			<div className="AdHeroBanner-radio">
				{ data?.radio_input.map( (input, i) => (
						<React.Fragment key={i}>
							<input
								id={input.label}
								className="AdHeroBanner-radio-input"
								type="radio"
								name="AdHeroBanner"
								defaultChecked={input.is_default}
								value="new"
								onChange={() => switchRadio(input.button)}
							/>
							<label className="AdHeroBanner-radio-label" htmlFor={input.label}>
								{input.label}
							</label>
						</React.Fragment>
					))
				}
			</div>
			{
				btnData && btnData?.link?.href
					? <Link href={btnData.link.href} className={`AdHeroBanner-btn ${btnData.type}`}>{btnData.title}</Link>
					: <button className="AdHeroBanner-btn"> {btnData?.title} </button>
			}
		</div>
	);
}