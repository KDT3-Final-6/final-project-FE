import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoIosCloseCircle } from 'react-icons/io'
import Image from '@src/components/common/Image'
import Button from '@src/components/common/Button'
import { useForm, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getCategory, postAddProduct } from '@src/api/product'
import { IproductCategories } from '@src/interfaces/product'
import { ErrorMessage } from '@src/components/common/InputItem'
import { useNavigate } from 'react-router-dom'
import { setModal } from '@src/reduxStore/modalSlice'
import { useDispatch } from 'react-redux'
import { IProductDetail } from '@src/interfaces/product'
import { useEditAdminProductDetailMutation } from '@src/reduxStore/api/adminProductApiSlice'

interface Props {
  product?: IProductDetail
  productId?: number
}

interface IFormType {
  productName: string
  productPrice: number
  productStatus: string
  productContent: string
  contentDetail: string
  group: number
  theme: number
  district1: number
  district2: number
  images: IterableIterator<File>[]
  thumbnail: IterableIterator<File>
}

const ProductForm = ({ product, productId }: Props) => {
  const [attachment, setAttachment] = useState('')
  const [detailAttachment, setDetailAttachment] = useState<string[]>([])
  const [categories, setCategories] = useState<IproductCategories[]>([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [editAdminProductDetail] = useEditAdminProductDetailMutation()

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
    setDetailAttachment([])
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
    productName: yup
      .string()
      .min(3, '세 글자 이상 작성해 주세요.')
      .required('상품 이름을 입력하세요.'),
    productPrice: yup
      .number()
      .typeError('숫자만 입력해 주세요.')
      .required('상품 가격을 입력하세요.'),
    productStatus: yup.string().required('상품 상태를 선택해 주세요.'),
    productContent: yup
      .string()
      .min(5, '다섯 글자 이상 작성해 주세요.')
      .required('상품 내용을 작성해 주세요.'),
    contentDetail: yup
      .string()
      .min(5, '다섯 글자 이상 작성해 주세요.')
      .required('상품 상세 정보를 입력해 주세요.'),
    group: yup.number().required('상품 카테고리를 선택해 주세요.'),
    theme: yup.number().required('상품 카테고리를 선택해 주세요.'),
    district1: yup.number().required('상품 카테고리를 선택해 주세요.'),
    district2: yup.number().required('상품 카테고리를 선택해 주세요.'),
    images: yup.mixed().required('상품 이미지를  첨부해 주세요.'),
    thumbnail: yup.mixed().required('상품 썸네일을 첨부해 주세요.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({ resolver: yupResolver(schema) })
  const formData = new FormData()
  const imageArray = (files: any) => {
    for (let i = 0; i < files.length; i += 1) {
      formData.append('images', files[i])
    }
  }

  const onSubmit = async (data: FieldValues) => {
    const {
      productName,
      productPrice,
      productStatus,
      productContent,
      contentDetail,
      images,
      thumbnail,
      group,
      theme,
      district1,
      district2,
    } = data
    const productPostRequestDTO = {
      productName,
      productPrice,
      productStatus,
      productContent,
      contentDetail,
      categoryIds: [group, theme, district1, district2],
    }
    formData.append(
      'productPostRequestDTO',
      new Blob([JSON.stringify(productPostRequestDTO)], {
        type: 'application/json',
      })
    )
    formData.append('thumbnail', thumbnail[0])
    imageArray(images)
    if (product) {
      await editAdminProductDetail({ productId, productData: productPostRequestDTO })
      dispatch(
        setModal({
          isOpen: true,
          text: '상품을 수정하였습니다.',
          onClickOK: () => {
            dispatch(setModal({ isOpen: false, router: navigate('/admin') }))
          },
        })
      )
    } else {
      await postAddProduct(formData)
      dispatch(
        setModal({
          isOpen: true,
          text: '상품을 추가하였습니다.',
          onClickOK: () => {
            dispatch(setModal({ isOpen: false, router: navigate('/admin') }))
          },
        })
      )
    }
  }

  return (
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
                defaultValue={product?.productName}
                {...register('productName')}
              />
              {errors.productName && <ErrorMessage>{errors.productName.message}</ErrorMessage>}
            </td>
          </tr>
          {!product && (
            <>
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
                    {errors.thumbnail && <ErrorMessage>{errors.thumbnail.message}</ErrorMessage>}
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
                    {errors.images && <ErrorMessage>{errors.images.message}</ErrorMessage>}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {detailAttachment &&
                        detailAttachment.map((imageUrl, index) => (
                          <Image bgImage={imageUrl} width="150px" height="199px" key={index} />
                        ))}
                    </div>
                  </ThumbnailStyle>
                </td>
              </tr>
            </>
          )}
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
                      type="radio"
                      id={String(group.categoryId)}
                      {...register('group')}
                      value={group.categoryId}
                      defaultChecked={
                        product?.productCategories[0]?.children?.categoryName === group.categoryName
                      }
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
                      type="radio"
                      id={String(theme.categoryId)}
                      {...register('theme')}
                      value={theme.categoryId}
                      defaultChecked={
                        product?.productCategories[2]?.children?.categoryName === theme.categoryName
                      }
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
                    type="radio"
                    id={String(district.categoryId)}
                    {...register('district1')}
                    value={district.categoryId}
                    defaultChecked={
                      product?.productCategories[1]?.children?.categoryName ===
                      district.categoryName
                    }
                  />
                  <label htmlFor={String(district.categoryId)}>{district.categoryName}</label>
                  <ColFlexStyle>
                    {district?.children?.map((country) => (
                      <CategoryInputStyle key={country.categoryId}>
                        <input
                          type="radio"
                          id={String(country.categoryId)}
                          {...register('district2')}
                          value={country.categoryId}
                          defaultChecked={
                            product?.productCategories[1]?.children?.children?.categoryName ===
                            country.categoryName
                          }
                        />
                        <label htmlFor={String(country.categoryId)}>{country.categoryName}</label>
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
                  defaultValue={product?.productPrice}
                  {...register('productPrice')}
                />{' '}
                원
                {errors.productPrice && <ErrorMessage>{errors.productPrice.message}</ErrorMessage>}
              </div>
            </td>
          </tr>
          <tr>
            <th>판매 상태</th>
            <td colSpan={6}>
              <StatusBoxStyle>
                <StatusStyle>
                  <input
                    type="radio"
                    id="sale"
                    {...register('productStatus')}
                    value="판매중"
                    defaultChecked={product?.productStatus === '판매중' ? false : true}
                  />
                  <label htmlFor="sale">판매 중</label>
                </StatusStyle>
                <StatusStyle>
                  <input type="radio" id="soldout" {...register('productStatus')} value="숨김" />
                  <label htmlFor="soldout">숨김</label>
                </StatusStyle>
                <StatusStyle>
                  <input type="radio" id="soldout" {...register('productStatus')} value="품절" />
                  <label htmlFor="soldout">품절</label>
                  {errors.productStatus && (
                    <ErrorMessage>{errors.productStatus.message}</ErrorMessage>
                  )}
                </StatusStyle>
              </StatusBoxStyle>
            </td>
          </tr>
          <tr>
            <th>간략 설명</th>
            <td colSpan={6}>
              <input
                type="text"
                {...register('productContent')}
                defaultValue={product?.productContent}
              />
              {errors.productContent && (
                <ErrorMessage>{errors.productContent.message}</ErrorMessage>
              )}
            </td>
          </tr>
          <tr>
            <th>상세 설명</th>
            <td colSpan={6}>
              <input
                type="text"
                {...register('contentDetail')}
                defaultValue={product?.contentDetail}
              />
              {errors.contentDetail && <ErrorMessage>{errors.contentDetail.message}</ErrorMessage>}
            </td>
          </tr>
        </tbody>
      </ProductTableStyle>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button margin="20px 0" buttonType="cartSkyBlue" type="submit">
          {product ? '상품 수정' : '상품 추가'}
        </Button>
      </div>
    </form>
  )
}

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

export default ProductForm
