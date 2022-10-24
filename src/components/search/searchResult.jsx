import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import imgNothing from '../../assets/rm512.png';
import { useSelector } from 'react-redux';
import { selectListPersons } from '../../store/rickmortySilce';

const ResultArea = styled.div(
  ({ theme }) => css`
    background: ${theme.backBlack};
    padding-left: 3rem;
    padding-right: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 1rem;
  `,
)

const Card = styled.div(
    ({ theme }) => css`
      background: rgba(194, 195, 195);
      border-radius: 10px;
      padding-left: 3rem;
      padding-right: 3rem;
      margin-bottom: 1rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 15rem;
      height: 10rem;

      img {
        padding: 0.5rem;
        width: 60%;
        height: 90%;
        margin-left: -3rem;
        fill: ${theme.whitesmoke};
      }
    `,
  )

  const CardDetaisl = styled.div(
    ({ theme }) => css`
      position: relative;
      margin-left: 7rem;
      margin-top: -10rem;
      span {
        margin-top: -1rem;
      }
      `,
  )

const RickMortySearchResult = ({ name }) => {
    const listPersons = useSelector(selectListPersons);
    const [rickmortyList, setRickmortyList] = useState(null);

    useEffect(() => {
        setRickmortyList(listPersons);
      }, [listPersons])

    if (rickmortyList && rickmortyList.length > 0){
      return (
        <ResultArea>
            {rickmortyList.map( (rec, idx) => {
               return ( <Card key={idx}>
                    <img src={rec.image} alt="Avatar" />
                    <CardDetaisl>
                        <h3>{rec.name}</h3>
                        <div><span>Gender:</span> {rec.gender}</div>
                        <div><span>Status:</span> {rec.status}</div>
                        <div><span>Species:</span> {rec.species}</div>
                    </CardDetaisl>
                </Card>
               )
            })}
        </ResultArea>
      );
    }
    else
    return (
      <ResultArea>
          <Card>
              <img src={imgNothing} alt="Avatar" />
              <CardDetaisl>
                  <h3>Nada foi encontrado...</h3>
              </CardDetaisl>
          </Card>
      </ResultArea>
  );
}

export default RickMortySearchResult;