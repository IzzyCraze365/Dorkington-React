import React from 'react'
import Backpack from './Backpack'
import Help from './Help'
import Interact from './Interact'
import ItemDrop from './ItemDrop'
import ItemTake from './ItemTake'
import Move from './Move'
import Status from './Status'

const ActionPanel = () => {
  return (
    <>
    <Move>Move</Move>
    <Interact>Interact</Interact>
    <ItemTake>Take</ItemTake>
    <ItemDrop>Drop</ItemDrop>
    <Look>Look</Look>
    <Backpack>Backpack</Backpack>
    <Status>Status</Status>
    <Help>Help</Help>
    <Exit>Exit</Exit>

    </>
  )
}

export default ActionPanel