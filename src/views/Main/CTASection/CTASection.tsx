import React, { useEffect, useState } from "react"
import { useApi } from "hooks/useApi"
import { MainPageAPI } from "api";
import {iButtonField, iLinkField} from "../../../types/fields";
import Link from "next/link";
import {ModalPopUp} from "../../../components/ModalPopup/ModalPopup";
import {Modal} from "../../../components/Modal/Modal";

interface iCTASection {
	cta_buttons: Array<iButtonField>,
	header: string,
	note: string,
}

export const CTASection = () => {
	const [data, setData] = useState<iCTASection>()
	const {apiCall} = useApi();
	const [modalData, setModalData] = useState<string>();

	useEffect(() => {
		apiCall(MainPageAPI.getCTA())
		.then(({data: {entry: {cta_buttons, header, note}}}) => setData({cta_buttons, header, note}))
	}, [])

	const doAction = (action: iButtonField["action"]) => {
		if(action.name === "open_modal"){
			setModalData(action.content)
		}
	}

	return (
		<div className="CTASection">
			<div className="CTASection-header" dangerouslySetInnerHTML={{__html: data?.header || ""}}/>
			<div  className="CTASection-note" dangerouslySetInnerHTML={{__html: data?.note || ""}}/>
			{data?.cta_buttons.map( (button) => (
					button.link.href
					? <Link href={button.link.href} className={`CTASection-button ${button.type}`} key={button.title}>{button.title}</Link>
					: <button className={`CTASection-button ${button.type}`} onClick={() => doAction(button.action)} key={button.title}>{button.title}</button>
				))
			}
			<Modal show={!!modalData?.length} className="CTASection-modal" onClose={() => setModalData(undefined)}>
				<div dangerouslySetInnerHTML={{__html: modalData || ""}}></div>
			</Modal>
		</div>

	)
}