// Modules
import React from 'react'

// Components
import IndividualBetButton from './individualBetButton'
import TeamDescriptionShort from './teamDescriptionShort'
import TeamDescriptionLong from './teamDescriptionLong'
import RenderOddsContainer from './renderOddsContainer'

const IndividualTeamContainer  = (props) => {
    const { data, bets, ui, clickHandler  } = props
    let urlHome, urlInstagram, urlTwitter
    urlHome = !data.strWebsite ||  data.strWebsite === undefined ? '' : data.strWebsite.includes('http') ? data.strWebsite : `http://${data.strWebsite}`
    urlInstagram = !data.strInstagram || data.strInstagram === undefined ? '' : data.strInstagram.includes('http') ? data.strInstagram : `http://${data.strInstagram}`
    urlTwitter = !data.strTwitter || data.strTwitter === undefined ? '' : data.strTwitter.includes('http') ? data.strTwitter : `http://${data.strTwitter}`

    return(
        <div className='col'>
            <div className='col-10 offset-1'>
                <div className='teamContent'>
                    <div className='row'>
                        <img className='teamImage' src={data.strTeamBadge} alt={`This is the badge for ${data.strTeam}`}/>
                    </div>
                    <div className='row my-4'>
                        <h1 className='teamTitle'>Team: {data.strTeam}</h1>
                        <h3 className='teamSportTitle'>Sport: {data.strSport}</h3>
                        {
                            ui ?
                                <TeamDescriptionLong clickHandler={ clickHandler } text={data.strDescriptionEN} /> :
                                <TeamDescriptionShort clickHandler={ clickHandler } text={data.strDescriptionEN} />
                        }
                        
                    </div>
                    <div className='row'>
                        { data.strWebsite ? 
                            <IndividualBetButton
                                classStyle='teamHome'
                                url={urlHome}
                                name='Home Site'
                            /> :
                            null
                        }
                        { data.strInstagram ? 
                            <IndividualBetButton
                                classStyle='instagram'
                                url={urlInstagram}
                                name='Instagram'
                            /> :
                            null
                        }
                        { data.strTwitter ? 
                            <IndividualBetButton
                                classStyle='twitter'
                                url={urlTwitter}
                                name='Twitter'
                            /> :
                            null
                        }
                    </div>
                    <div className='row my-4'>
                        <h4 className='currentOdds'>Current Odds</h4>
                        <div className='oddsContainer'>
                            {bets.map((site, index) => { return RenderOddsContainer(site, index) })}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default IndividualTeamContainer