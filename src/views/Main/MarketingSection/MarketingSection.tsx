import React, { useEffect, useState } from "react"
import { MainPageAPI } from "api";
import { useApi } from "hooks/useApi"
import Image from "next/image";
import { iButtonField, iPictureField } from "types/fields";
import Link from "next/link";

interface iMarketingData {
	header: string,
	text: string,
	image: iPictureField,
	buttons: Array<iButtonField>,
}

export const MarketingSection = () => {
	const [data, setData] = useState<Array<iMarketingData>>();
	const {apiCall} = useApi();

	useEffect(() => {
		apiCall(MainPageAPI.getAllPhotoTextBlocks())
			.then(({data: {entries}}) => {
				setData(entries);
			})
			.catch((err) => {
				
			})
	}, [])

	console.log("%c DATA", "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange", data);

	return (
		<div className="MarketingSection">
			{
				data?.map((block, i) => (
					<div className={`MarketingSection-block ${i % 2 ? "reverse" : ""}`} key={i}>
						<Image src={block?.image?.url} className="MarketingSection-imag" alt={block?.header} width={590} height={590}/>
						<div className="MarketingSection-content">
							<h3 className="MarketingSection-header">{block?.header}</h3>
							<div className="MarketingSection-text" dangerouslySetInnerHTML={{__html: block?.text}}></div>
							{ block?.buttons.map((btn) => (
									!btn.link?.href
										? <button className={`MarketingSection-btn ${btn.type}`} key={btn.title}> {btn.title} </button>
										: <Link href={btn.link.href} className={`MarketingSection-btn ${btn.type}`} key={btn.title}>{btn.title}</Link>
								))
							}
						</div>
					</div>
				))
			}
		</div>
	)
}