import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components'
import { GoSearch } from 'react-icons/go'
import RickMortySearchResult from './searchResult';
import { changePersonName } from '../../store/rickmortySilce';

const WrapperSearch = styled.section(
  ({ theme }) => css`
    ${theme.mixins.flex}
    position:relative;
  `,
)

const IconSearch = styled.div(
  ({ theme }) => css`
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    box-sizing:border-box;
    left: 0.3rem;
    transform: translateY(5%);
  `,
)

const SearshArea = styled.div(
  ({ theme }) => css`
    background: ${theme.backBlack};
    padding-left: 3rem;
    padding-right: 3rem;
  `,
)

const InputSearsh = styled.input(
    ({ theme }) => css`
      width: 100%;
      height: 2.2rem;
      border-radius: 15px;
      padding-left: 1.7rem;
      box-sizing:border-box;
    `,
  )

const RickMortySearch = () => {
  const [personName, setPersonName] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.value;
    setPersonName(name);
    dispatch(changePersonName(name));
  };

  return (<>
        <SearshArea>
          <WrapperSearch>
            <IconSearch><GoSearch/></IconSearch>
            <InputSearsh
                type = 'search'
                placeholder = 'Procure um personagem'
                onChange = {handleChange}
            />
          </WrapperSearch>
        </SearshArea>
        {/* {personName.length > 999999999 && <RickMortySearchResult name={personName} />} */}
        {personName.length > 0 && <RickMortySearchResult name={personName} />}
      </>
  );
}

export default RickMortySearch;