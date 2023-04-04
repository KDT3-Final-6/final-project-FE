import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoIosCloseCircle } from 'react-icons/io'
import Image from '@src/components/common/Image'
import Button from '@src/components/common/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getCategory } from '@src/api/product'
import { IproductCategories } from '@src/interfaces/product'

const AddProduct = () => {
  const [attachment, setAttachment] = useState('')
  const [detailAttachment, setDetailAttachment] = useState<string[]>([])
  const [categories, setCategories] = useState<IproductCategories[]>([])
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event
    const theFile = files![0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }

  const multifilePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event

    for (let i = 0; i < files!.length; i += 1) {
      const reader = new FileReader()
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        }: any = finishedEvent
        setDetailAttachment((prev) => [...prev, result])
      }
      reader.readAsDataURL(files![i])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategory()
      setCategories(data)
    }
    fetchData()
  }, [])

  const schema = yup.object().shape({
    productName: yup.string().min(3, '세 글자 이상 작성해 주세요.'),
    productPrice: yup.number(),
    productState: yup.string(),
    productContent: yup.string().min(5, '다섯 글자 이상 작성해 주세요.'),
    contentDetail: yup.string().min(5, '다섯 글자 이상 작성해 주세요.'),
    categories: yup.array(),
    images: yup.mixed(),
    thumbnail: yup.mixed(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data: any) => {
    console.log(data)
  }
  return (
    <ContainerStyle>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 32px 0">
          <h1>상품 추가</h1>
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductTableStyle>
            <colgroup>
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">상품명</th>
                <td colSpan={6}>
                  <input
                    type="text"
                    placeholder="상품명을 입력해 주세요."
                    {...register('productName')}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">상품 썸네일 등록</th>
                <td colSpan={6}>
                  <ThumbnailStyle>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg,image/png,image/jpg"
                      id="thumbnail"
                      {...register('thumbnail', { onChange: onFileChange })}
                    />
                    <label htmlFor="thumbnail">+</label>
                    {attachment && (
                      <Image bgImage={attachment} width="251px" height="199px">
                        <button onClick={() => setAttachment('')}>
                          <IoIosCloseCircle size="30" color="gray" />
                        </button>
                      </Image>
                    )}
                  </ThumbnailStyle>
                </td>
              </tr>
              <tr>
                <th>상품 상세 이미지 등록</th>
                <td colSpan={6}>
                  <ThumbnailStyle>
                    <input
                      type="file"
                      multiple
                      accept="image/gif,image/jpeg,image/png,image/jpg"
                      id="images"
                      {...register('images', { onChange: multifilePreview })}
                    />
                    <label htmlFor="images">+</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {detailAttachment &&
                        detailAttachment.map((imageUrl, index) => (
                          <Image bgImage={imageUrl} width="150px" height="199px" key={index}>
                            <button
                              onClick={() =>
                                setDetailAttachment((prev) => {
                                  prev.splice(prev.indexOf(imageUrl), 1)
                                  return [...prev]
                                })
                              }
                            >
                              <IoIosCloseCircle size="30" color="gray" />
                            </button>
                          </Image>
                        ))}
                    </div>
                  </ThumbnailStyle>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={7}>
                  상품 카테고리
                </th>
              </tr>
              <tr>
                <th scope="row">그룹별</th>
                <td colSpan={6}>
                  <CategoryStyle>
                    {categories[0]?.children?.map((group) => (
                      <CategoryInputStyle key={group.categoryId}>
                        <input
                          type="checkbox"
                          id={String(group.categoryId)}
                          {...register('categories')}
                          value={group.categoryId}
                        />
                        <label htmlFor={String(group.categoryId)}>{group.categoryName}</label>
                      </CategoryInputStyle>
                    ))}
                  </CategoryStyle>
                </td>
              </tr>
              <tr>
                <th>테마별</th>
                <td colSpan={6}>
                  <CategoryStyle>
                    {categories[2]?.children?.map((theme) => (
                      <CategoryInputStyle key={theme.categoryId}>
                        <input
                          type="checkbox"
                          id={String(theme.categoryId)}
                          {...register('categories')}
                          value={theme.categoryId}
                        />
                        <label htmlFor={String(theme.categoryId)}>{theme.categoryName}</label>
                      </CategoryInputStyle>
                    ))}
                  </CategoryStyle>
                </td>
              </tr>
              <tr>
                <th>지역별</th>
                {categories[1]?.children?.map((district) => (
                  <td key={district.categoryId}>
                    <CategoryInputStyle>
                      <input
                        type="checkbox"
                        id={String(district.categoryId)}
                        {...register('categories')}
                        value={district.categoryId}
                      />
                      <label htmlFor={String(district.categoryId)}>{district.categoryName}</label>
                      <ColFlexStyle>
                        {district?.children?.map((country) => (
                          <CategoryInputStyle key={country.categoryId}>
                            <input
                              type="checkbox"
                              id={String(country.categoryId)}
                              {...register('categories')}
                              value={country.categoryId}
                            />
                            <label htmlFor={String(country.categoryId)}>
                              {country.categoryName}
                            </label>
                          </CategoryInputStyle>
                        ))}
                      </ColFlexStyle>
                    </CategoryInputStyle>
                  </td>
                ))}
              </tr>
              <tr>
                <th>가격</th>
                <td colSpan={6}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="number"
                      placeholder="숫자만 입력해 주세요"
                      {...register('productPrice')}
                    />{' '}
                    원
                  </div>
                </td>
              </tr>
              <tr>
                <th>판매 상태</th>
                <td colSpan={6}>
                  <StatusBoxStyle>
                    <StatusStyle>
                      <input type="radio" id="sale" {...register('productStatus')} value="판매중" />
                      <label htmlFor="sale">판매 중</label>
                    </StatusStyle>
                    <StatusStyle>
                      <input
                        type="radio"
                        id="soldout"
                        {...register('productStatus')}
                        value="판매중단"
                      />
                      <label htmlFor="soldout">판매 중지</label>
                    </StatusStyle>
                  </StatusBoxStyle>
                </td>
              </tr>
              <tr>
                <th>간략 설명</th>
                <td colSpan={6}>
                  <input type="text" {...register('productContent')} />
                </td>
              </tr>
              <tr>
                <th>상세 설명</th>
                <td colSpan={6}>
                  <input type="text" {...register('contentDetail')} />
                </td>
              </tr>
            </tbody>
          </ProductTableStyle>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button margin="20px 0" buttonType="cartSkyBlue" type="submit">
              상품 추가
            </Button>
          </div>
        </form>
      </Inner>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  background-color: ${COLORS.cf3f3f3};
  padding: 32px 0;
`

const ProductTableStyle = styled.table`
  width: 100%;
  th {
    background-color: ${COLORS.cd5dae8};
    border: 1px solid ${COLORS.white};
    vertical-align: middle;
    padding: 10px 0;
  }
  td {
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cd5dae8};
    vertical-align: middle;
    padding: 10px;
    input[type='text'],
    input[type='number'] {
      border: 1px solid ${COLORS.cd5dae8};
      height: 27px;
      padding: 10px;
    }
    input[type='file'] {
      display: none;
    }
    input[type='file'] + label {
      width: 251px;
      height: 199px;
      background-color: ${COLORS.cd9d9d9};
      color: ${COLORS.white};
      font-size: ${FONTSIZE.fz26};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`

const CategoryStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const CategoryInputStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
  }
  input[type='radio'] {
    width: 20px;
    height: 20px;
  }
`

const ColFlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ThumbnailStyle = styled.div`
  display: flex;
  gap: 10px;
`

const StatusBoxStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const StatusStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    width: 150px;
  }
`

export default AddProduct
